const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb+srv://development:q6V36BD7hhwNPJ5@development.psj4p.mongodb.net/learn");
};

module.exports = dbConnect;
