// Imports.
const express = require('express');
const router  = require('./routes/main.route');

// Create an express application.
const app = express();

// Define Constant port.
const PORT = 3000;

// Set View Engine.
app.set('view engine', 'ejs');

// use express Router.
app.use('/', router);

// Start the server(Listen at PORT)
app.listen(PORT, (err, data)=>{
    console.log(err, data);
    console.log('App is runningat PORT: ', PORT);
})