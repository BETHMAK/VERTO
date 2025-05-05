const User = require('../models/User');
const Applicant = require('../models/Applicant');
const Program = require('../models/Program');

// Get all users (excluding passwords)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all applicants
exports.getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find().select('-password');
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single applicant by ID
exports.getApplicantById = async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id).select('-password');
    if (!applicant) {
      return res.status(404).json({ message: 'Applicant not found' });
    }
    res.json(applicant);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update applicant status (e.g., approved, rejected)
exports.updateApplicantStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicant = await Applicant.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!applicant) {
      return res.status(404).json({ message: 'Applicant not found' });
    }
    res.json(applicant);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
