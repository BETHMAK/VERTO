const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const applicantRoutes = require('./routes/applicantRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const programRoutes = require('./routes/programRoutes');
const documentRoutes = require('./routes/documentRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/applicant', applicantRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/programs', require('./routes/programRoutes'));
app.use('/api/interviews', require('./routes/interviewRoutes'));


mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.log(err));
