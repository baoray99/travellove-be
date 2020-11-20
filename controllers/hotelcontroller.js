const Hotel = require("../models/hotel");
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
const getAll = async (req, res) => {
  try {
    const hotel = await Hotel.find();
    res.json(hotel);
  } catch (error) {
    res.json({ message: error });
  }
};
//get by id place
const getByPlaceId = async (req, res) => {
  try {
    const hotel = await Hotel.find({ placeId: req.params.placeId });
    res.json(hotel);
  } catch (err) {
    res.json({ message: err });
  }
};
// get by id hotel
const getByHotelId = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params._id);
    res.json(hotel);
  } catch (err) {
    res.json({ message: err });
  }
};
// create
//only created by admin
const createHotel = async (req, res) => {
  const place = await Place.findOne({ _id: req.body.placeId });
  const hotel = new Hotel({
    name: req.body.name,
    placeId: req.body.placeId,
    place: place,
    star: req.body.star,
    price: req.body.price,
    star_rating: req.body.star_rating,
    description: req.body.description,
    images: req.body.images,
  });
  try {
    const savehotel = await hotel.save();
    res.json({ message: "Create hotel success", savehotel });
  } catch (err) {
    res.json({ message: err });
  }
};
//delete only admin
// router.delete("/:hotelId", auth, async (req, res) => {
//   if (req.user.isAdmin === true) {
//     try {
//       const removedhotel = await Hotel.remove({ _id: req.params.hotelId });
//       res.json({ message: "Delete hotel success", removedhotel });
//     } catch (err) {
//       res.json({ messgae: err });
//     }
//   } else {
//     res.status(400).send({ message: "Only admin is permitted" });
//   }
// });
// //update by id only admin and mod
// router.put("/:hotelId", auth, async (req, res) => {
//   // them auth sau "/:hotelId", auth, async nhá
//   if (req.user.isAdmin === true || req.user.isMod === true) {
//     try {
//       const updatedHotel = await Hotel.updateOne(
//         { _id: req.params.hotelId },
//         {
//           $set: {
//             Name: req.body.Name,
//             PlaceID: req.body.PlaceID,
//             Place: req.body.Place,
//             Star: req.body.Star,
//             Price: req.body.Price,
//             Star_Rating: req.body.Star_Rating,
//             Description: req.body.Description,
//             URL_Image: req.body.URL_Image,
//           },
//         }
//       );
//       res.json({ message: "Update hotel success", updatedHotel });
//     } catch (err) {
//       res.json({ messgae: err });
//     }
//   } else {
//     res.status(400).send({ message: "Only admin and mod is permitted" });
//   }
// });

module.exports = {
  getAll,
  getByHotelId,
  getByPlaceId,
  createHotel,
};
