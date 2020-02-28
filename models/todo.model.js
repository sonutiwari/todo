// import mongoose.
const mongoose = require('mongoose');

// import Schema.
const Schema = mongoose.Schema;

// Create  Schema.
const todoSchema = new Schema({
    tag: String,
    task_desc: String,
    due_date: String
});

// Create model.
const model = mongoose.model('TODO', todoSchema);

const DB = {};
DB.connect = () => {
    mongoose.connect('mongodb://localhost/todo'
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    );
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}

// Get All the data.
DB.getData = callback => {
    model.find((err, res)=>{
        callback(err, res);
    });
}

// Add new task.
DB.addTask = (data, callback) =>{
    const record = new model(data);
    record.save((err, res) => {
        callback(err, res);
    });
}

DB.deleteTask = (data, callback) => {
    model.remove(data, err => {
        callback(err);
    });
}

module.exports = DB;