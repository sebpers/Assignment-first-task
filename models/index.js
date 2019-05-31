// Import mongoose, an object modeling tool
const mongoose = require('mongoose');
// Import student model
const Student = require('./student.js');

// Connect to the mongo database
const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/students";

// Create a connection between the mongoose object modeling tool and the database
const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};


// Exports
module.exports = {
  connectDb,
  models: {
    Student
  }
}