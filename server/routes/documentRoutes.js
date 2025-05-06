//documentRoutes,js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Document = require('../models/Document');
const auth = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', auth, upload.single('document'), async (req, res) => {
  try {
    const doc = new Document({
      userId: req.user.id,
      filename: req.file.originalname,
      path: req.file.path
    });

    await doc.save();
    res.status(201).json({ msg: 'Document uploaded successfully', doc });
  } catch (err) {
    res.status(500).json({ msg: 'Upload failed', error: err.message });
  }
});

module.exports = router;
