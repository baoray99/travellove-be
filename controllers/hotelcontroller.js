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
const getAllHotel = async (req, res) => {
  try {
    const hotel = await Hotel.find().select(
      "name mainimg star min_price max_price address discount description"
    );
    res.json(hotel);
  } catch (error) {
    res.json({ message: error });
  }
};
//get by id place
const getHotelByPlaceId = async (req, res) => {
  try {
    const hotel = await Hotel.find({ placeId: req.params.placeId }).select(
      "name mainimg star min_price max_price address discount description"
    );
    res.json(hotel);
  } catch (err) {
    res.json({ message: err });
  }
};
// get by id hotel
const getHotelById = async (req, res) => {
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
    address: req.body.address,
    star: req.body.star,
    min_price: req.body.min_price,
    max_price: req.body.max_price,
    discount: req.body.discount,
    description: req.body.description,
    mainimg: req.body.mainimg,
    images: req.body.images,
    isLiked: false,
  });
  try {
    const savehotel = await hotel.save();
    res.json({ message: "Create hotel success", savehotel });
  } catch (err) {
    res.json({ message: err });
  }
};
// delete only admin
const deleteHotel = async (req, res) => {
  try {
    const removedhotel = await Hotel.remove({ _id: req.params._id });
    res.json({ message: "Delete hotel success", removedhotel });
  } catch (err) {
    res.json({ messgae: err });
  }
};
// //update by id only admin and mod
const updateHotel = async (req, res) => {
  // them auth sau "/:hotelId", auth, async nhá
  const place = await Place.findOne({ _id: req.body.placeId });
  try {
    const updatedHotel = await Hotel.updateOne(
      { _id: req.params._id },
      {
        $set: {
          name: req.body.name,
          placeId: req.body.placeId,
          place: place,
          address: req.body.address,
          star: req.body.star,
          min_price: req.body.min_price,
          max_price: req.body.max_price,
          discount: req.body.discount,
          description: req.body.description,
          mainimg: req.body.mainimg,
          images: req.body.URL_images,
          isLiked: req.body.isLiked,
        },
      }
    );
    res.json({ message: "Update hotel success", updatedHotel });
  } catch (err) {
    res.json({ messgae: err });
  }
};

module.exports = {
  getAllHotel,
  getHotelById,
  getHotelByPlaceId,
  createHotel,
  deleteHotel,
  updateHotel,
};
