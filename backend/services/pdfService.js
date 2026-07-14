const fs = require("fs");
const { PDFParse } = require("pdf-parse");
const wordService = require("./wordService");

async function convert(file) {
  try {
    // Read uploaded PDF
    const dataBuffer = fs.readFileSync(file.path);

    // Create parser
    const parser = new PDFParse({
      data: dataBuffer,
    });

    // Extract text
    const result = await parser.getText();

    // Release parser resources
    await parser.destroy();

    // Generate Word document
    const buffer = await wordService.createWord(result.text);

    // Delete uploaded temp file
    fs.unlinkSync(file.path);

    return {
      filename: file.originalname.replace(".pdf", ".docx"),
      buffer,
    };
  } catch (error) {
    console.error("PDF Conversion Error:", error);
    throw error;
  }
}

module.exports = {
  convert,
};