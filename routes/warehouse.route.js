const express = require("express");
const router = express.Router();
const warehouse = require("../controllers/warehouse");

router.post("/warehouse", warehouse.create);
router.get("/warehouse", warehouse.fetch);

module.exports = router;
