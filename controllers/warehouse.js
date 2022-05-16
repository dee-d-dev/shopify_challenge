const Warehouse = require("../models/warehouse.model");
const { warehouse_schema } = require("../utils/validation_schema");

exports.create = async (req, res) => {
  const { name, capacity, address, city, state, zip } = req.body;
  try {
    await warehouse_schema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }
  const warehouse = new Warehouse({
    name,
    capacity,
    address,
    city,
    state,
    zip,
  });

  warehouse
    .save()
    .then(() => {
      return res.status(200).send(warehouse);
    })
    .catch((err) => {
      return res
        .status(400)
        .send({ message: err.message || "error creating a warehouse" });
    });
};
exports.fetch = async (req, res) => {
  const warehouse = await Warehouse.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: err.message || "error fetching a warehouse" });
    });
};
