/**
 * Created by Ben Church on 27/01/2017.
 */

// server.js

// call the packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');



//var config = require('./package.json').config || {}
//var accessToken = config.accessToken,space= config.space;

// configure app to use bodyParser() to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;        // set port



// API Routes
require('./controllers/routes')(app);


// Start Server
app.listen(port);
console.log('Server listening on ' + port);