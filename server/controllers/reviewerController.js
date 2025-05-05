const Application = require('../models/Application');

exports.getPendingApplications = async (req, res) => {
  try {
    const pending = await Application.find({ status: 'pending' });
    res.json(pending);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.reviewApplication = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
