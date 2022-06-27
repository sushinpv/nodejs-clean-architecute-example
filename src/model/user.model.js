const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  admin: String,
  isActive: Boolean,
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
