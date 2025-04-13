const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ['Vocational', 'Undergraduate', 'Postgraduate'], required: true },
  description: String,
  deadline: Date
});

module.exports = mongoose.model('Program', programSchema);
