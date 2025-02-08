const express = require('express');
const PerformanceReview = require('../models/PerformanceReview');

const router = express.Router();

// Get performance reviews for an employee
router.get('/:employeeId', async (req, res) => {
  const { employeeId } = req.params;
  const reviews = await PerformanceReview.find({ assignedEmployees: employeeId })
    .populate('employeeId'); // Populate employee details
  res.json(reviews);
});

// Submit feedback for a performance review
router.post('/:reviewId/feedback', async (req, res) => {
  const { reviewId } = req.params;
  const { feedback } = req.body;

  try {
    const review = await PerformanceReview.findById(reviewId);
    if (review) {
      review.feedback.push(feedback);
      await review.save();
      res.status(200).json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error submitting feedback' });
  }
});

module.exports = router;
