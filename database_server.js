var express = require('express'); // A pre-made server 'kit' (framework)
var fs = require('fs'); //File system access/helpers
var bodyParser = require('body-parser'); // Collects sent data

// HOOK UP A DATABASE!!!
var mongoose = require('mongoose'); // DB control program
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ga-server-demo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DATABASE CONNECTED!!');
});

// WAY TO GET ACCESS TO DATA ABOUT TUTORS: JUST IGNORE
var tutorSchema = mongoose.Schema({
    name: { type: String, required: true},
    age: { type: Number, required: true}
});

var Tutor = mongoose.model('Tutor', tutorSchema);
// DONE

var options = { // some configuration options <-- ignore
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};


var app = express(); // Create the app

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Create request routes for it to respond to
app.get('/', function(request, response) {
    console.log('as a server, I am returning a response');
    response.send('hello world');
});

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

// Add a new tutor
app.post('/api/tutors', function(req, res){
  console.log('as an API and Database server, I am returning data');
  // Some Data
  var tutor = req.body;
  console.log('tutor', tutor);
  var newTutor = new Tutor(tutor);
  console.log('newTutor', newTutor);
  newTutor.save(function(err, model){
    if (err) {
      return res.status(500).send(err);
    }
    return res.sendStatus(201);
  });
});

// GET ALL TUTORS
app.get('/api/tutors', function(req, res){
  console.log('as an API server, I am returning data');

  Tutor.find({}).exec(function(err, tutors){
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(tutors);
  });

});

app.listen(3000, function() {
    console.log('Your server is ALIVE!!!');
});
