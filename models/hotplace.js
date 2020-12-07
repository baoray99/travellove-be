const mongoose = require("mongoose");

const hotPlaceSchema = mongoose.Schema(
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
    isLiked: {
      type: Boolean,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);
const HotPlace = mongoose.model("HotPlace", hotPlaceSchema);
module.exports = HotPlace;
