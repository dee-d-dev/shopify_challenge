const Warehouse = require("../models/warehouse.model");

exports.create = async (req, res) => {
  const warehouse = new Warehouse({
    name: req.body.name,
    capacity: req.body.capacity,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });

  await warehouse
    .save()
    .then(() => {
      res.send(warehouse);
    })
    .catch((err) => {
      res.send({ message: err.message || "error creating a warehouse" });
    });
};
