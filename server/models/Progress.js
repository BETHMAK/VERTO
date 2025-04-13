const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  stages: {
    documentSubmitted: { type: Boolean, default: false },
    interviewScheduled: { type: Boolean, default: false },
    interviewConfirmed: { type: Boolean, default: false },
    accepted: { type: Boolean, default: false },
    rejected: { type: Boolean, default: false }
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Progress', ProgressSchema);
