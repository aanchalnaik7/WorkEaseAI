const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

exports.getPdfInfo = async (file) => {

    const pdfBytes = fs.readFileSync(file.path);

    const pdfDoc = await PDFDocument.load(pdfBytes);

    const totalPages = pdfDoc.getPageCount();

    fs.unlinkSync(file.path);

    return {
        success: true,
        filename: file.originalname,
        totalPages
    };

};