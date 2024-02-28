const express = require("express");
const {
  getAllItems,
  getSingleItem,
  deleteSingleItems,
  updateSingleItem,
  createNewItem,
  updateManyItems,
} = require("../controllers/items_controllers");
const router = express.Router();

router.route("/").get(getAllItems).post(createNewItem).put(updateManyItems);

router
  .route("/:id")
  .get(getSingleItem)
  .put(updateSingleItem)
  .delete(deleteSingleItems);
module.exports = router;
