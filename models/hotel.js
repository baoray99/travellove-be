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
    address: {
      type: String,
      require: true,
    },
    star: {
      type: String,
      require: false,
    },
    min_price: {
      type: Number,
      require: true,
    },
    max_price: {
      type: Number,
      require: true,
    },
    discount: {
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
    isLiked: {
      type: Boolean,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);
const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
