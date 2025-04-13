const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');

// Create interview slot
router.post('/create', async (req, res) => {
  try {
    const interview = await Interview.create(req.body);
    res.status(201).json(interview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get interview slots for applicant
router.get('/:applicantId', async (req, res) => {
  const { applicantId } = req.params;
  const slots = await Interview.find({ applicantId });
  res.json(slots);
});

// Confirm or reschedule
router.put('/confirm/:id', async (req, res) => {
  const { id } = req.params;
  const { date, time } = req.body;
  const updated = await Interview.findByIdAndUpdate(
    id,
    { date, time, confirmed: true },
    { new: true }
  );
  res.json(updated);
});

module.exports = router;
