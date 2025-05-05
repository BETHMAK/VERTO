const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  appliedPrograms: [{
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Program'
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    }
  }],
  documents: [{
    name: String,
    path: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model('Applicant', applicantSchema);
