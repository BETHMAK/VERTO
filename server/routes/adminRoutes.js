const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authMiddleware, verifyAdmin } = require('../middleware/auth');

// Apply both middlewares
router.get('/users', authMiddleware, verifyAdmin, adminController.getAllUsers);
router.delete('/users/:id', authMiddleware, verifyAdmin, adminController.deleteUser);
router.get('/applicants', authMiddleware, verifyAdmin, adminController.getAllApplicants);
router.get('/applicants/:id', authMiddleware, verifyAdmin, adminController.getApplicantById);
router.post('/applicants/:id/status', authMiddleware, verifyAdmin, adminController.updateApplicantStatus);

module.exports = router;
