// routes/admin.js
const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');
const { verifyAdmin } = require('../middleware/auth');
const Program = require('../models/Program');

// Get individual applicant profile
router.get('/applicants/:id', verifyAdmin, async (req, res) => {
  const applicant = await Applicant.findById(req.params.id);
  res.json(applicant);
});

// Update applicant status
router.post('/applicants/:id/status', verifyAdmin, async (req, res) => {
  const { status } = req.body;
  const applicant = await Applicant.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(applicant);
});

// Get all programs
router.get('/programs', verifyAdmin, async (req, res) => {
    const programs = await Program.find();
    res.json(programs);
  });
  
  // Add new program
  router.post('/programs', verifyAdmin, async (req, res) => {
    const { name } = req.body;
    const program = new Program({ name });
    await program.save();
    res.json(program);
  });
  
  // Update program
  router.put('/programs/:id', verifyAdmin, async (req, res) => {
    const { name } = req.body;
    const updated = await Program.findByIdAndUpdate(req.params.id, { name }, { new: true });
    res.json(updated);
  });
  
  // Delete program
  router.delete('/programs/:id', verifyAdmin, async (req, res) => {
    await Program.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  });

module.exports = router;
