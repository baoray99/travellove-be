const Food = require("../models/food");
const Hotel = require("../models/hotel");
const HotPlace = require("../models/hotplace");

const getFavourite = async (req, res) => {
  try {
    const foodFav = await Food.find({ users: req.params.userId }).select(
      "name users placeId mainimg address"
    );
    const hotelFav = await Hotel.find({ users: req.params.userId }).select(
      "name users placeId mainimg address"
    );
    const hotplaceFav = await HotPlace.find({
      users: req.params.userId,
    }).select("name users placeId mainimg address");
    const fav = [hotplaceFav, foodFav, hotelFav];
    res.json(fav);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = {
  getFavourite,
};
