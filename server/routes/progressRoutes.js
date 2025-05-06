//progressRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Progress = require('../models/Progress'); // assumes you created this model
const User = require('../models/User');

// Applicant views their progress
router.get('/', auth, async (req, res) => {
  try {
    const progress = await Progress.find({ applicantId: req.user.id }).populate('programId');
    res.json(progress);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Admin updates applicant progress for a program
router.put('/:id', auth, async (req, res) => {
  try {
    const { stage, note } = req.body;

    const progress = await Progress.findByIdAndUpdate(
      req.params.id,
      { stage, note, updatedAt: new Date() },
      { new: true }
    ).populate('programId');

    res.json({ msg: 'Progress updated', progress });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Admin creates a progress record (if needed)
router.post('/', auth, async (req, res) => {
  try {
    const { applicantId, programId, stage, note } = req.body;

    const existing = await Progress.findOne({ applicantId, programId });
    if (existing) return res.status(400).json({ msg: 'Progress already exists' });

    const progress = new Progress({
      applicantId,
      programId,
      stage,
      note,
      createdAt: new Date(),
    });

    await progress.save();
    res.status(201).json({ msg: 'Progress created', progress });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
