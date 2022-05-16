const { Item } = require("../models/item.model");
const express = require("express");

exports.create = async (req, res) => {
  const item = new Item({
    name: req.body.name,
    warehouse: req.body.warehouse,
    units: req.body.units,
    cost: req.body.cost,
  });
  await item
    .save()
    .then((data) => {
      res.status(200).send(data).populate("warehouse");
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "error creating item",
      });
      process.exit();
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

exports.delete = (req, res) => {
  const item = Item.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send(`cannot find item with id ${req.params.id}`);
        process.exit();
      }
      res.send(`item with id ${req.params.id} has been successfully deleted`);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "error deleting item",
      });
      process.exit();
    });
};

exports.view = (req, res) => {
  const item = Item.find()
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
