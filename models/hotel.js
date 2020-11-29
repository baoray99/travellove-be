const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    placeId: {
      type: String,
      require: true,
    },
    place: {
      type: Object,
      require: true,
    },
    star: {
      type: Number,
      require: false,
    },
    price: {
      type: Number,
      require: true,
    },
    star_rating: {
      type: Number,
      require: false,
    },
    description: {
      type: String,
      require: false,
    },
    mainimg: {
      type: String,
      require: true,
    },
    images: {
      type: Array,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);
const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
