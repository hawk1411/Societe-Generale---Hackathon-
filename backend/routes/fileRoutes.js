const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { verifyFile, uploadFile } = require('../controllers/fileController');

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});
// ✅ Define this POST route
router.post('/upload', upload.single('file'), uploadFile);
router.post('/verify', upload.single('file'), verifyFile);

module.exports = router;
