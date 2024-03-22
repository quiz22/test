var fs = require('fs');
var http = require('http');
var https = require('https');
var path = require('path');

var privateKey = fs.readFileSync('./key/privatekey.pem','utf-8');
var certificate = fs.readFileSync('./key/certrequest.pem','utf-8');
var credentials = {
    key: privateKey,
    cert: certificate
};

var httpSv = http.createServer();

var httpsSv = https.createServer(); 