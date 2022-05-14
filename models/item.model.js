const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const item_schema = Schema({
  name: String,
  warehouse: { type: mongoose.Schema.Types.ObjectId, ref: "Warehouse" },
  units: Number,
  cost: Number,
});

exports.Item = model("Item", item_schema);
