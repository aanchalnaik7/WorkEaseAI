const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

exports.splitPDF = async (file, fromPage, toPage) => {

    const pdfBytes = fs.readFileSync(file.path);

    const pdfDoc = await PDFDocument.load(pdfBytes);

    const totalPages = pdfDoc.getPageCount();

    if (
        fromPage < 1 ||
        toPage > totalPages ||
        fromPage > toPage
    ) {
        fs.unlinkSync(file.path);

        throw new Error("Invalid page range.");
    }

    const newPdf = await PDFDocument.create();

    const pageIndexes = [];

    for (let i = fromPage - 1; i <= toPage - 1; i++) {
        pageIndexes.push(i);
    }

    const copiedPages = await newPdf.copyPages(
        pdfDoc,
        pageIndexes
    );

    copiedPages.forEach(page => newPdf.addPage(page));

    const pdfData = await newPdf.save();

    const outputDir = path.join(__dirname, "../output");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const outputPath = path.join(
        outputDir,
        `split-${Date.now()}.pdf`
    );

    fs.writeFileSync(outputPath, pdfData);

    fs.unlinkSync(file.path);

    return outputPath;
};