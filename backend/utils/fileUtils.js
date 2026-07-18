const fs = require("fs");

exports.deleteFile = (filePath) => {

    try {

        if (filePath && fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

    } catch (error) {

        console.error("Unable to delete file:", error.message);

    }

};