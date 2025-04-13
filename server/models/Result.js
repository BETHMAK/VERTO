const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected', 'Waitlisted'],
    default: 'Pending'
  },
  submitted: { type: Boolean, default: false },
  submissionDate: { type: Date }
});

module.exports = mongoose.model('Result', ResultSchema);
