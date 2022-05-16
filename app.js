const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const api_route = require("./routes/api.v1");

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("db connected");
});

app.get("/home", (req, res) => {
  res.status(200).send("welcome");
});

app.use("/api", api_route);

app.listen(3030, () => {
  console.log("running pon 3000");
});

module.exports = app