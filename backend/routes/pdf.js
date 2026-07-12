const express = require("express");

const router = express.Router();

router.post("/pdf-to-word", (req, res) => {
  res.json({
    success: true,
    message: "PDF received successfully!",
  });
});

module.exports = router;