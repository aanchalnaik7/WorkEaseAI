const { execFile } = require("child_process");
const fs = require("fs");

function compressPDF(inputPath, outputPath, compression = "balanced") {
  return new Promise((resolve, reject) => {
    let pdfSetting = "/ebook";

    switch (compression) {
      case "high":
        pdfSetting = "/prepress";
        break;
      case "maximum":
        pdfSetting = "/screen";
        break;
      case "balanced":
      default:
        pdfSetting = "/ebook";
        break;
    }

    const args = [
      "-sDEVICE=pdfwrite",
      "-dCompatibilityLevel=1.4",
      `-dPDFSETTINGS=${pdfSetting}`,
      "-dNOPAUSE",
      "-dQUIET",
      "-dBATCH",
      `-sOutputFile=${outputPath}`,
      inputPath,
    ];

    execFile("gs", args, (error) => {
      if (error) {
        return reject(error);
      }

      if (!fs.existsSync(outputPath)) {
        return reject(new Error("Compressed PDF was not created."));
      }

      resolve(outputPath);
    });
  });
}

module.exports = {
  compressPDF,
};