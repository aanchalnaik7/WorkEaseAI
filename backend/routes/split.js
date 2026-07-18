const express = require("express");
const upload = require("../middleware/upload");
const splitController = require("../controllers/splitController");

const router = express.Router();

router.post(
    "/split-pdf",
    upload.single("file"),
    splitController.splitPDF
);

module.exports = router;