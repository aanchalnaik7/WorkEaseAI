const splitService = require("../services/splitService");

exports.splitPDF = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF uploaded."
            });
        }

        const fromPage = Number(req.body.fromPage);
        const toPage = Number(req.body.toPage);

        const outputPath = await splitService.splitPDF(
            req.file,
            fromPage,
            toPage
        );

        res.download(outputPath, "split.pdf");
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};