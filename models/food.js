const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
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
    description: {
      type: String,
      require: false,
    },
    price: {
      type: Number,
      require: false,
    },
    discount: {
      type: Number,
      require: false,
    },
    star_rating: {
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
    users: {
      type: Array,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);
const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
