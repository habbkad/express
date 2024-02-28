const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://codetrainfellows:YXSatOXIv8y4mQrP@cluster0.tuufpbf.mongodb.net/"
      )
      .then((res) => {
        console.log(`mongo DB connected successfully`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
