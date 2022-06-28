const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb+srv://localhost:27017/learn");
};

module.exports = dbConnect;
