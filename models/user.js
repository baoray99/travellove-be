const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    birthday: {
      type: Date,
      require: true,
    },
    avatar: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
