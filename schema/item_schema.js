const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchma = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  itemType: {
    type: String,
    enum: [
      "babyItems",
      "frozenFoods",
      "toiletries",
      "drinks",
      "toys",
      "plasticItems",
      "food",
      "other",
    ],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  views: {
    type: Number,
  },
});

const itemModel = mongoose.model("groceries", itemSchma);

module.exports = itemModel;
