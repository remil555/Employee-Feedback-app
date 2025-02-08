const express = require('express');
const bcrypt = require('bcrypt');
const Employee = require('../models/employee');
const router = express.Router();


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', { email, password }); // Log the input

  try {
    // Find the employee by email
    const employee = await Employee.findOne({ email });
    console.log('Employee found:', employee); // Log the found employee

    // If employee exists and password matches
    if (employee && password === employee.password) {
      console.log('Login successful'); // Log success
      res.json({ role: employee.role, id: employee._id });
    } else {
      console.log('Login failed: Invalid credentials'); // Log failure
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error); // Log errors
    res.status(500).json({ error: 'Error during login' });
  }
});
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching employees' });
  }
});

// Add a new employee 
router.post('/', async (req, res) => {
  const { name, role, email, password } = req.body;

  try {
    // Create a new employee with the plain-text password
    const newEmployee = new Employee({ name, role, email, password });
    await newEmployee.save();

    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Error creating employee' });
  }
});

module.exports = router;