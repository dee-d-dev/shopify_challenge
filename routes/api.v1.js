const express = require("express");
const router = express.Router();
const item_route = require("./items.route");
const warehouse_route = require("./warehouses.route");

router.use("/v1", item_route);
router.use("/v1", warehouse_route);

module.exports = router;
