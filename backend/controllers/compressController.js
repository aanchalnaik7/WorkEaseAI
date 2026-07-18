const path = require("path");
const fs = require("fs");
const { compressPDF } = require("../services/compressService");

const compressPDFController = async (req, res) => {
  let inputPath = "";
  let outputPath = "";

  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded.",
      });
    }

    const compression = req.body.compression || "balanced";

    inputPath = req.file.path;

    outputPath = path.join(
      __dirname,
      "..",
      "output",
      `compressed-${Date.now()}.pdf`
    );

    await compressPDF(inputPath, outputPath, compression);

    res.download(outputPath, "compressed.pdf", (err) => {
      if (err) {
        console.error("Download error:", err);
      }

      if (fs.existsSync(inputPath)) {
        fs.unlinkSync(inputPath);
      }

      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
    });

  } catch (error) {

    console.error(error);

    if (inputPath && fs.existsSync(inputPath)) {
      fs.unlinkSync(inputPath);
    }

    if (outputPath && fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    res.status(500).json({
      success: false,
      message: "PDF compression failed.",
      error: error.message,
    });
  }
};

module.exports = {
  compressPDFController,
};