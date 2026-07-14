const { Document, Packer, Paragraph } = require("docx");

async function createWord(text) {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph(text),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

module.exports = {
  createWord,
};