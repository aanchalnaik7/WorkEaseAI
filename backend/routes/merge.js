const express = require("express");
const multer = require("multer");
const mergeController = require("../controllers/mergeController");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/merge-pdf",
  upload.array("files", 20),
  mergeController.mergePdf
);

module.exports = router;