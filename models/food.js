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
    description: {
      type: String,
      require: false,
    },
    price: {
      type: Number,
      require: false,
    },
    star_rating: {
      type: Number,
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
const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
