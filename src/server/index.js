const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require("body-parser");
const cors = require('cors');

console.log("API_ID is " + process.env.API_ID);
console.log("API_KEY is " + process.env.API_KEY);

// Set the Aylien API credentials
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Designate which port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/aylien', (req, res) => {
    let articleText = req.body.text;
    console.log(articleText);
    textapi.sentiment({
      'text': articleText
    }, function(error, response) {
      console.log(error,response);
      if (error === null) {
        console.log(response);
        // Store sentiment analysis results to be displayed in the UI
        const analysisResults = {
          "polarity": response.polarity,
          "subjectivity": response.subjectivity,
          "text": response.text,
          "polarity_confidence": response.polarity_confidence,
          "subjectivity_confidence": response.subjectivity_confidence
        }
        console.log("Immediately below are analysis results:");
        console.log(analysisResults);
        console.log("analysisResults should be available to UI now")
        res.send(analysisResults);
      }
    });
});