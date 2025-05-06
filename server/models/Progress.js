// models/Progress.js
const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  stage: { type: String, required: true }, // e.g., "Under Review", "Interview Scheduled", "Accepted"
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model('Progress', progressSchema);
