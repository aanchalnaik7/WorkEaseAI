const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pdfRoutes = require("./routes/pdf");
const mergeRoutes = require("./routes/merge");
const splitRoutes = require("./routes/split");
const pdfInfoRoutes = require("./routes/pdfInfo");
const compressRoutes = require("./routes/compress");
const rotateRoutes = require("./routes/rotate");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api", pdfRoutes);
app.use("/api", mergeRoutes);
app.use("/api", splitRoutes);
app.use("/api", pdfInfoRoutes);
app.use("/api", compressRoutes);
app.use("/api", rotateRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to WorkEase AI Backend 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});