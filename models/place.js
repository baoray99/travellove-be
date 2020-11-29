const mongoose = require("mongoose");

const placeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    country: {
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
    images: {
      type: Array,
      require: false,
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
