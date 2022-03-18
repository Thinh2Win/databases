var express = require('express');
// bringin in express framework
var db = require('./db');
// imports something from db/index.js file
// if we go look at that file

// Middleware: functions run on the request
var morgan = require('morgan'); //logging
var cors = require('cors');

// Router
var router = require('./routes.js');

// invoking a function to create an app class
var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev')); // consoles status codes
app.use(cors()); // handles cross origin requests
app.use(express.json()); // parse the incoming requests with JSON payload

// Set up our routes
// if route beings with /classes, run the callback 
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

