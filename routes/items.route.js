const express = require("express");
const router = express.Router();
const items = require("../controllers/inventory_items");

router.post("/item", items.create);
router.put("/item/:id", items.edit);
router.delete("/item/:id", items.delete);
router.get("/item", items.view);

module.exports = router;
