const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: { type: String, unique: true },
  password: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
