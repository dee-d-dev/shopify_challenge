const Joi = require("joi");

let item_schema = Joi.object({
  name: Joi.string().trim().min(5).required(),
  warehouse: Joi.string(),
  units: Joi.number().min(1).required(),
  cost: Joi.number().min(1).required(),
});

let warehouse_schema = Joi.object({
  name: Joi.string().trim().min(2).required(),
  capacity: Joi.number().min(1).required(),
  address: Joi.string().trim().min(2).required(),
  city: Joi.string().trim().min(1).required(),
  state: Joi.string().trim().min(2).required(),
  zip: Joi.number().min(1).required(),
});

module.exports = { item_schema, warehouse_schema };
