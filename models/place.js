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
    url_image: {
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
