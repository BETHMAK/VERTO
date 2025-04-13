const express = require('express');
const router = express.Router();
const Program = require('../models/Program');

// Get all programs
router.get('/', async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
