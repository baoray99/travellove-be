const mongoose = require("mongoose");

const placeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    mainimg: {
      type: String,
      require: true,
    },
    star: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
