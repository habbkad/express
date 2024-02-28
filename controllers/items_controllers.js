const Item = require("../schema/item_schema");

//method  post
//route    /
//desc    create new item
//private  true
exports.createNewItem = async (req, res) => {
  console.log(req.body);
  try {
    const newItem = await new Item(req.body);
    newItem.save();
    res.send({
      message: "Item created successfully",
      item: newItem,
    });
  } catch (error) {
    res.send({
      message: "Create failed",
      error: error.message,
    });
  }
};

//method  get
//route    /
//desc    get all items
//private  false
exports.getAllItems = async (req, res) => {
  try {
    const allItems = await Item.find();
    res.send({
      message: "get successfull",
      items: allItems,
    });
  } catch (error) {
    res.send({
      message: "get all failed",
      error: error.message,
    });
  }
};

//method  put
//route    /:id
//desc    update single item
//private  true
exports.updateSingleItem = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, req.body);
    res.send({ message: "update successfull", item: updatedItem });
  } catch (error) {
    res.send({
      message: "update failed",
      error: error.message,
    });
  }
};

//method  get
//route    /:id
//desc    get single item
//private  false
exports.getSingleItem = async (req, res) => {
  const { id } = req.params;
  try {
    const singleItem = await Item.findById(id);
    res.send({ message: "get successfull", item: singleItem });
  } catch (error) {
    res.send({
      message: "get failed",
      error: error.message,
    });
  }
};

//method  delete
//route    /id
//desc    delete single items
//private  true
exports.deleteSingleItems = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    res.send({
      message: "delete successfull",
      item: deletedItem,
    });
  } catch (error) {
    res.send({
      message: "delete failed",
      error: error.message,
    });
  }
};
//method  put
//route    /
//desc    update many
//private  true
exports.updateManyItems = async (req, res) => {
  const { price, update } = req.body;
  try {
    const items = await Item.updateMany({ price }, { price: update.price });
    res.send({
      message: "delete successfull",
      item: items,
    });
  } catch (error) {
    res.send({
      message: "update many failed",
      error: error.message,
    });
  }
};
