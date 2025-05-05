const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const applicantController = require('../controllers/applicantController');

// All routes below require the user to be authenticated and have the role 'applicant'
router.use(authMiddleware); // Must be logged in
router.use(roleMiddleware(['applicant'])); // Must be an applicant

// GET /api/applicant/programs - List all available programs
router.get('/programs', applicantController.getAvailablePrograms);

// POST /api/applicant/apply/:programId - Apply to a program
router.post('/apply/:programId', applicantController.applyToProgram);

// GET /api/applicant/applications - View my applications
router.get('/applications', applicantController.getMyApplications);

// GET /api/applicant/profile - Get logged-in applicant profile
router.get('/profile', applicantController.getProfile);

module.exports = router;
