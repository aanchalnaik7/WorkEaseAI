const { PDFDocument, degrees } = require("pdf-lib");
const fs = require("fs");

async function rotatePDF(inputPath, outputPath, angle) {
  const pdfBytes = fs.readFileSync(inputPath);

  const pdfDoc = await PDFDocument.load(pdfBytes);

  const pages = pdfDoc.getPages();

  pages.forEach((page) => {
    page.setRotation(degrees(Number(angle)));
  });

  const rotatedPdf = await pdfDoc.save();

  fs.writeFileSync(outputPath, rotatedPdf);

  return outputPath;
}

module.exports = {
  rotatePDF,
};