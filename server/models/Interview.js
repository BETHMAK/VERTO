const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  date: { type: Date, required: true },
  confirmed: { type: Boolean, default: false },
  notes: { type: String }
});

module.exports = mongoose.model('Interview', InterviewSchema);
