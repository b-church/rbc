// server.js

// call the packages
const express = require('express');
const app = express();
let port = 8080;        // set port
const bodyParser = require('body-parser');

//var config = require('./package.json').config || {}
//var accessToken = config.accessToken,space= config.space;

// configure app to use bodyParser() to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// API Routes
//other way of doing routes
//require('./controllers/routes')(app);

let router = require('./controllers/router');
app.use('/', router);



// Start Server
app.listen(port);
console.log('Server listening on port ' + port);