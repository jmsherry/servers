var express = require('express'); // A pre-made server 'kit' (framework)
var fs = require('fs'); //File system access/helpers

var app = express(); // Create the app

// Create request routes for it to respond to
app.get('/', function(request, response) {
    console.log('as a server, I am returning a response');
    response.send('hello world');
});

app.listen(3000, function() {
    console.log('Your server is ALIVE!!!');
});
