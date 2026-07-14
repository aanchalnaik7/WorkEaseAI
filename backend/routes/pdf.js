const express = require("express");
const multer = require("multer");
const pdfController = require("../controllers/pdfController");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/pdf-to-word",
  upload.single("file"),
  pdfController.convertPdfToWord
);

module.exports = router;