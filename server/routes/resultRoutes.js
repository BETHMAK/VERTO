const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// Submit final application
router.post('/submit', async (req, res) => {
  const { applicantId, programId } = req.body;
  const result = await Result.findOneAndUpdate(
    { applicantId, programId },
    { submitted: true, submissionDate: new Date() },
    { upsert: true, new: true }
  );
  res.json(result);
});

// Get applicant status
router.get('/applicant/:id', async (req, res) => {
  const results = await Result.find({ applicantId: req.params.id }).populate('programId');
  res.json(results);
});

// Admin sets result
router.put('/status/:id', async (req, res) => {
  const { status } = req.body;
  const result = await Result.findByIdAndUpdate(req.params.id, { status }, { new: true });

  const applicant = await User.findById(result.applicantId);
  await sendEmail({
    to: applicant.email,
    subject: 'Admission Decision',
    text: `Your application result for ${result.programId.title} is: ${status}.`
  });

  res.json(result);
});
