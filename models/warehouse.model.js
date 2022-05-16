const mongoose = require("mongoose");

const warehouseSchema = mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
});

module.exports = mongoose.model("Warehouse", warehouseSchema);
