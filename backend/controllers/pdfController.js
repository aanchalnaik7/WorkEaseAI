const pdfService = require("../services/pdfService");

async function convertPdfToWord(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    const result = await pdfService.convert(req.file);

    return res.json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  convertPdfToWord,
};