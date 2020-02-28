// Imports.
const express = require('express');
const path    = require('path');
const router  = require('./routes/main.route');

// Create an express application.
const app = express();

// Define Constant port.
const PORT = 3000;

// Set View Engine.
app.set('view engine', 'ejs');

// Set urlencoded.
app.use(express.urlencoded({extended: true}));

// Set static file.
app.use(express.static('assets'));

// use express Router.
app.use('/', router);

// Start the server(Listen at PORT)
app.listen(PORT, err=>{
    if(!err)console.log('App is runningat PORT: ', PORT);
    else console.log(err);
})