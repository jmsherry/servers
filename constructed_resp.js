var express = require('express'); // A pre-made server 'kit' (framework)
var fs = require('fs'); //File system access/helpers
var path = require('path');
var dustjsExpress = require('dustjs-express');

var options = { // some configuration options <-- ignore
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};


var app = express(); // Create the app

app.set('views', path.join(__dirname, 'templates')); //templates directory

// Set dust as the templating engine
app.set('view engine', 'dust');
app.engine('dust', dustjsExpress.engine());



// Create request routes for it to respond to
app.get('/constructed', function(req, res) {
    console.log('as a file server, I am returning a constructed response', req.query);
    res.render('index', {name: req.query.name});
});

app.listen(3000, function() {
    console.log('Your server is ALIVE!!!');
});
