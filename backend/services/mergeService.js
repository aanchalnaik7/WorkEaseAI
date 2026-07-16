const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

async function merge(files) {
  const mergedPdf = await PDFDocument.create();

  try {
    for (const file of files) {
      console.log("Merging:", file.originalname);

      const pdfBytes = fs.readFileSync(file.path);

      const pdf = await PDFDocument.load(pdfBytes);

      const copiedPages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      );

      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });

      fs.unlinkSync(file.path);
    }

    const mergedBytes = await mergedPdf.save();

    return {
      filename: "merged.pdf",
      buffer: Buffer.from(mergedBytes),
    };

  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  merge,
};