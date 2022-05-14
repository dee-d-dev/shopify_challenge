const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Item } = require("./models/item.model");
const dotenv = require("dotenv").config();
const item_router = require("./routes/items.route");
const warehouse_router = require("./routes/warehouse.route");

app.use(express.json());
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("db connected");
});
app.get("/home", (req, res) => {
  res.send("welcome");
});

app.use("/v1", item_router);
app.use("/v1", warehouse_router);

app.listen(3030, () => {
  console.log("running pn 3000");
});
