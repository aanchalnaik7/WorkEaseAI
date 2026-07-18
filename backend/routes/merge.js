const express = require("express");
const upload = require("../middleware/upload");
const mergeController = require("../controllers/mergeController");

const router = express.Router();

router.post(
    "/merge-pdf",
    upload.array("files"),
    mergeController.mergePDF
);

module.exports = router;