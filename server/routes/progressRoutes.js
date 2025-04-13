const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Get progress for a specific applicant
router.get('/:id', async (req, res) => {
  try {
    const progress = await Progress.findOne({ applicantId: req.params.id });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update progress (admin only)
router.put('/:id', async (req, res) => {
  try {
    const update = req.body.stages;
    const progress = await Progress.findOneAndUpdate(
      { applicantId: req.params.id },
      { stages: update, lastUpdated: Date.now() },
      { new: true, upsert: true }
    );
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
