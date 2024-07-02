const router = require('express').Router();
const multer = require('multer');

// Configure Multer for file uploads (replace 'uploads' with your desired folder)
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    // Customize the filename here
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  const newFilename = req.file.originalname + '.' + req.file.mimetype.split('/')[1];
  // You can optionally use the new filename for further processing

  res.json({ message: 'File uploaded successfully!', P_REQUEST_ID: Math.round(Math.random() * 1E9) });
});

// get some file in /uploads for download
router.get('/:filename', (req, res) => {
  const filePath = 'outboundFiles/' + req.params.filename;
  res.download(filePath);
});

module.exports = router;