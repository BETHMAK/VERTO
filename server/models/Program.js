const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ['Vocational', 'Undergraduate', 'Postgraduate'], required: true },
  description: String,
  deadline: Date,
  name: { type: String, required: true }
});

const ProgramSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ['Bachelor', 'Diploma', 'Certificate'], required: true },
    description: { type: String },
    duration: { type: String },
    requirements: { type: String },
    createdAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Program', programSchema);
