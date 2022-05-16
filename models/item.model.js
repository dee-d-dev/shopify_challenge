const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const item_schema = Schema({
  name: { type: String, required: true },
  warehouse: { type: mongoose.Schema.Types.ObjectId, ref: "Warehouse" },
  units: { type: Number, required: true },
  cost: { type: Number, required: true },
});

exports.Item = model("Item", item_schema);
