const HotPlace = require("../models/hotplace");
const Place = require("../models/place");
// const auth = require("../middleware/auth");
//token gồm Bearer + token (sau Bearer có dấu cách)
//get all
// const getAll =async (req, res) => {
//   try {
//     const perPage = parseInt(req.query.limit || 1000);
//     const page = parseInt(req.query.page || 1);
//     Hotel.find({})
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec(function (err, hotel) {
//         Hotel.count().exec(function (err, count) {
//           if (err) return next(err);
//           res.status = 200;
//           res.send({
//             hotels: hotel,
//             current: page,
//             pages: Math.ceil(count / perPage),
//           });
//         });
//       });
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
//get all hotel
const getAllHotPlace = async (req, res) => {
  try {
    const hotplaces = await HotPlace.find().select("name star address mainimg");
    res.json(hotplaces);
  } catch (error) {
    res.json({ message: error });
  }
};
//get by id place
const getHotPlaceByPlaceId = async (req, res) => {
  try {
    const hotplace = await HotPlace.find({
      placeId: req.params.placeId,
    }).select("name star address mainimg");
    res.json(hotplace);
  } catch (err) {
    res.json({ message: err });
  }
};
// get by id hotel
const getHotPlaceById = async (req, res) => {
  try {
    const hotplace = await HotPlace.findById(req.params._id);
    res.json(hotplace);
  } catch (err) {
    res.json({ message: err });
  }
};
// create
//only created by admin
const createHotPlace = async (req, res) => {
  const place = await Place.findOne({ _id: req.body.placeId });
  const hotplace = new HotPlace({
    name: req.body.name,
    placeId: req.body.placeId,
    place: place,
    address: req.body.address,
    star: req.body.star,
    description: req.body.description,
    mainimg: req.body.mainimg,
    images: req.body.images,
    isLiked: false,
  });
  try {
    const savehotplace = await hotplace.save();
    res.json({ message: "Create hotplace success !", savehotplace });
  } catch (err) {
    res.json({ message: err });
  }
};
// delete only admin
const deleteHotPlace = async (req, res) => {
  try {
    const removedhotplace = await HotPlace.remove({ _id: req.params._id });
    res.json({ message: "Delete hotplace success !", removedhotplace });
  } catch (err) {
    res.json({ messgae: err });
  }
};
// //update by id only admin and mod
const updateHotPlace = async (req, res) => {
  // them auth sau "/:hotelId", auth, async nhá
  try {
    const updatedHotPlace = await HotPlace.updateOne(
      { _id: req.params._id },
      {
        $set: {
          users: req.body.users,
        },
      }
    );
    res.json({ message: "Update hotplace success !", updatedHotPlace });
  } catch (err) {
    res.json({ messgae: err });
  }
};
const getAllHotPlaceByUser = async (req, res) => {
  try {
    const hotplaceFav = await HotPlace.find({
      users: req.params.userId,
    }).select("name users");
    // console.log(foodFav);
    res.json(hotplaceFav);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = {
  getAllHotPlace,
  getHotPlaceById,
  getHotPlaceByPlaceId,
  createHotPlace,
  deleteHotPlace,
  updateHotPlace,
  getAllHotPlaceByUser,
};
