const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
  }
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;