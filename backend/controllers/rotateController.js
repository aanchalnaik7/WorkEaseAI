const path = require("path");
const fs = require("fs");
const { rotatePDF } = require("../services/rotateService");

const rotatePDFController = async (req, res) => {
  let inputPath = "";
  let outputPath = "";

  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded.",
      });
    }

    const angle = Number(req.body.angle || 90);

    if (![90, 180, 270].includes(angle)) {
      return res.status(400).json({
        success: false,
        message: "Rotation angle must be 90, 180 or 270 degrees.",
      });
    }

    inputPath = req.file.path;

    outputPath = path.join(
      __dirname,
      "..",
      "output",
      `rotated-${Date.now()}.pdf`
    );

    await rotatePDF(inputPath, outputPath, angle);

    res.download(outputPath, "rotated.pdf", (err) => {
      if (err) {
        console.error("Download Error:", err);
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
      message: "Unable to rotate PDF.",
      error: error.message,
    });
  }
};

module.exports = {
  rotatePDFController,
};