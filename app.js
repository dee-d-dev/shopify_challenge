const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const api_route = require("./routes/api.v1");
const PORT = process.env.PORT;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://shopify:shopify@cluster0.0on4l.mongodb.net/db?retryWrites=true&w=majority",
  () => {
    console.log("db connected");
  }
);

app.get("/home", (req, res) => {
  res.status(200).send("welcome");
});

app.use("/api", api_route);

app.listen(PORT, () => {
  if (PORT) {
    console.log(`running on http://localhost:${PORT}`);
  } else {
    console.log(`running on http://localhost:3000`);
  }
});

module.exports = app;
