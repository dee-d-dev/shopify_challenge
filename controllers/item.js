const { Item } = require("../models/item.model");
const express = require("express");
const { item_schema } = require("../utils/validation_schema");

exports.create = async (req, res) => {
  const { name, warehouse, units, cost } = req.body;
  try {
    await item_schema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }

  const item = new Item({
    name,
    warehouse,
    units,
    cost,
  });

  item
    .save()
    .then((data) => {
      return res.status(200).send(data);
     
    })
    .catch((err) => {
      return res.status(400).send({
        message: err.message || "error creating item",
      });
      
    });
};

exports.edit = (req, res) => {
  const item = Item.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      warehouse: req.body.warehouse,
      units: req.body.units,
      cost: req.body.cost,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send(`cannot find item with ${req.params.id}`);
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "error updating item",
      });
      process.exit();
    });
};

exports.delete = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send(`cannot find item with id ${req.params.id}`);
        process.exit();
      }
      res
        .status(200)
        .send(`item with id ${req.params.id} has been successfully deleted`);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "error deleting item",
      });
      process.exit();
    });
};

exports.view = async (req, res) => {
  const item = await Item.find()
    .populate("warehouse")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "error fetching item",
      });
      process.exit();
    });
};
