async function convert(file) {
  console.log("PDF received:", file.originalname);

  return {
    success: true,
    message: "PDF uploaded successfully!",
    filename: file.originalname,
  };
}

module.exports = {
  convert,
};