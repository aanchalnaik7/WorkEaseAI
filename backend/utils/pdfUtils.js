const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

exports.loadPdf = async (filePath) => {

    const pdfBytes = fs.readFileSync(filePath);

    const pdfDoc = await PDFDocument.load(pdfBytes);

    return pdfDoc;

};

exports.getPageCount = async (filePath) => {

    const pdfDoc = await exports.loadPdf(filePath);

    return pdfDoc.getPageCount();

};