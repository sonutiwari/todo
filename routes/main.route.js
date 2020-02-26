// Imports
const express        = require('express');
const MainController = require('../controllers/todo.controller');

// Get Router from Express.
const Router         = express.Router();

// Build route for root.
Router.get('/', MainController.home);

// Exports the module.
module.exports = Router;