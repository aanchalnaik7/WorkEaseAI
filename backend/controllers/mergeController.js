const mergeService = require("../services/mergeService");

async function mergePdf(req, res) {
  try {
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please upload at least two PDF files.",
      });
    }

    const result = await mergeService.merge(req.files);

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${result.filename}"`
    );

    return res.send(result.buffer);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Merge failed.",
    });
  }
}

module.exports = {
  mergePdf,
};