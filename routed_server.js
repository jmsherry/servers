var express = require('express'); // A pre-made server 'kit' (framework)
var fs = require('fs'); //File system access/helpers

var options = { // some configuration options <-- ignore
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};


var app = express(); // Create the app

// Create request routes for it to respond to
app.get('/docs', function(req, res) {
    console.log('as a file server, I am returning a response', req.query.file);
    var fileName = 'test.txt';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(3000, function() {
    console.log('Your server is ALIVE!!!');
});
