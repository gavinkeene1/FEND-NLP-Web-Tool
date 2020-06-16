const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require("body-parser");
const cors = require('cors');

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

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/aylien', (request, response) => {
    let articleURL = request.body.url;
    console.log(articleURL);
    textapi.sentiment({
      'text': 'John is a very good football player!'
    }, function(error, response) {
      if (error === null) {
        console.log(response);
      }
    });
});