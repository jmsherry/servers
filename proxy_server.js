var proxy = require('express-http-proxy');
var express = require('express');

var app = express();

app.use('/', proxy('www.google.com'));

app.listen(3000, function() {
    console.log('Your server is ALIVE!!!');
});
