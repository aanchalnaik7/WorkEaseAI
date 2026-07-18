const express = require("express");
const upload = require("../middleware/upload");
const pdfInfoController = require("../controllers/pdfInfoController");

const router = express.Router();

router.post(
    "/pdf-info",
    upload.single("file"),
    pdfInfoController.getPdfInfo
);

module.exports = router;