require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const employeeRoutes = require('./routes/employeeRoutes');
const performanceReviewRoutes = require('./routes/performanceReviewRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/performance_review', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/performance-reviews', performanceReviewRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});