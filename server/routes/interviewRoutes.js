//interviewRoutes.js
const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');
const User = require('../models/User');
const sendMail = require('../utils/email');

// Create interview slot
router.post('/create', async (req, res) => {
  try {
    const interview = await Interview.create(req.body);
    res.status(201).json(interview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  await sendMail({
    to: 'applicant@example.com', // Replace with dynamic applicant email from DB
    subject: 'Interview Scheduled',
    text: `Dear applicant, your interview is scheduled on ${req.body.date} at ${req.body.time}.`,
    html: `<p><strong>Interview Date:</strong> ${req.body.date}</p><p><strong>Time:</strong> ${req.body.time}</p>`
  });
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
 
await sendMail({
    to: 'admin@example.com', // Replace with actual admin
    subject: 'Interview Confirmed',
    text: `The applicant confirmed the interview scheduled on ${req.body.date} at ${req.body.time}.`,
    html: `<p><strong>Confirmed Interview:</strong> ${req.body.date} at ${req.body.time}</p>`
  });
  
});

// GET applicant's interview
router.get('/applicant/:id', async (req, res) => {
    const interview = await Interview.findOne({ applicantId: req.params.id }).populate('programId');
    res.json(interview);
  });
  
  // POST (admin schedules)
  router.post('/', async (req, res) => {
    try {
      const interview = new Interview(req.body);
      await interview.save();
  
      const applicant = await User.findById(interview.applicantId);
  
      // Send email notification
      await sendEmail({
        to: applicant.email,
        subject: 'Interview Scheduled',
        text: `Your interview for ${interview.programId} is scheduled on ${interview.date}.`
      });
  
      res.status(201).json(interview);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // PUT confirm interview (applicant)
  router.put('/confirm/:id', async (req, res) => {
    const interview = await Interview.findByIdAndUpdate(req.params.id, { confirmed: true }, { new: true });
    res.json(interview);
  });

module.exports = router;
