// Imports
const express        = require('express');
const MainController = require('../controllers/todo.controller');

// Get Router from Express.
const Router         = express.Router();

// Build route for root.
Router.get('/', MainController.home);

// Add Todo list.
Router.get('/add_todo', MainController.addToDo);

// Delete TODO list.
Router.get('/delete_task', MainController.deleteToDo);

// Exports the module.
module.exports = Router;