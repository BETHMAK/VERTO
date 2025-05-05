const User = require('../models/User');

// controllers/applicantController.js

exports.getAvailablePrograms = async (req, res) => {
    try {
      // Fetch programs from DB (replace with real logic)
      res.json({ programs: [] });
    } catch (err) {
      res.status(500).json({ error: 'Failed to load programs' });
    }
  };
  
  exports.applyToProgram = async (req, res) => {
    try {
      const { programId } = req.params;
      const userId = req.user._id;
      // Logic to apply to a program (replace with real logic)
      res.json({ message: `User ${userId} applied to program ${programId}` });
    } catch (err) {
      res.status(500).json({ error: 'Application failed' });
    }
  };
  
  exports.getMyApplications = async (req, res) => {
    try {
      const userId = req.user._id;
      // Fetch applications by userId
      res.json({ applications: [] });
    } catch (err) {
      res.status(500).json({ error: 'Failed to get applications' });
    }
  };
  
  exports.getProfile = async (req, res) => {
    try {
      res.json({ user: req.user });
    } catch (err) {
      res.status(500).json({ error: 'Failed to load profile' });
    }
  };
  