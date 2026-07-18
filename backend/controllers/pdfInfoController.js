const pdfInfoService = require("../services/pdfInfoService");

exports.getPdfInfo = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF uploaded."
            });
        }

        const result = await pdfInfoService.getPdfInfo(req.file);

        return res.json(result);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};