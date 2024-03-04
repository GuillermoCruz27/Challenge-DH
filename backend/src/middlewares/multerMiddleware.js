const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img/applicant");
  },
  filename: (req, file, cb) => {
    let fileName = `portada_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;