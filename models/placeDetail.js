const mongoose = require("mongoose");

const placeDetailSchema = mongoose.Schema(
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
const PlaceDetail = mongoose.model("PlaceDetail", placeDetailSchema);
module.exports = PlaceDetail;
