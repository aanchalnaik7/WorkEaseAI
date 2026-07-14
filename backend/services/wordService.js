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

  const buffer = await Packer.toBuffer(doc);

  return buffer;
}

module.exports = {
  createWord,
};