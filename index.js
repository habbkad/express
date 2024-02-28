const express = require("express");
const itemsRoutes = require("./routes/item_routes");
const bodyParser = require("body-parser");
const connectDB = require("./api");
const app = express();

//connect to DB
connectDB();

//middlewares
app.use(bodyParser.json());

//routes
app.use("/items", itemsRoutes);

const PORT = 4004;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
