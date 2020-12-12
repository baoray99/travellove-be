const mongoose = require("mongoose");

const foodFavSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    foodId: {
      type: String,
      require: true,
    },
    isLiked: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const FoodFav = mongoose.model("FoodFav", foodFavSchema);
module.exports = FoodFav;
