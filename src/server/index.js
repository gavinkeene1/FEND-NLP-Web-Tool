import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})