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

// POST new program (admin)
router.post('/', async (req, res) => {
    try {
      const newProgram = new Program(req.body);
      await newProgram.save();
      res.status(201).json(newProgram);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // DELETE a program (admin)
  router.delete('/:id', async (req, res) => {
    try {
      await Program.findByIdAndDelete(req.params.id);
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

module.exports = router;
