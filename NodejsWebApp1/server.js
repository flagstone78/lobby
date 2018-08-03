'use strict';
//var http = require('http');
var port = process.env.PORT || 1337;

var express = require('express'); //for reading other files
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/html/index.html'))
});

app.listen(port);
console.log('Running on port: ' + port);