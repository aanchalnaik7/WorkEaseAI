const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pdfRoutes = require("./routes/pdf");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api", pdfRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to WorkEase AI Backend 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});