const mongoose = require('mongoose');

const performanceReviewSchema = new mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  assignedEmployees: [mongoose.Schema.Types.ObjectId],
  feedback: [String],
});

const PerformanceReview = mongoose.model('PerformanceReview', performanceReviewSchema);

module.exports = PerformanceReview;
