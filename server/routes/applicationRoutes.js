const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Application = require('../models/Application');

router.post('/', auth, async (req, res) => {
  try {
    const { programId } = req.body;
    const existing = await Application.findOne({ userId: req.user.id, programId });
    if (existing) return res.status(400).json({ msg: 'Already applied to this program' });

    const app = new Application({ userId: req.user.id, programId });
    await app.save();
    res.status(201).json({ msg: 'Application submitted', app });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id }).populate('programId');
    res.json(apps);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
