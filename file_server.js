var express = require('express'); // A pre-made server 'kit' (framework)
var app = express(); // Create the app

// will serve static files. '/' will always server 'index.html' on a fileserver, unless you actively change the access file rules.
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Your server is ALIVE!!!');
});
