const Place = require("../models/place");

// //token gồm Bearer + token (sau Bearer có dấu cách) get all
// router.get("/", async (req, res) => {
//   try {
//     const perPage = parseInt(req.query.limit || 10000);
//     const page = parseInt(req.query.page || 1);
//     Place.find({})
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec(function (err, place) {
//         Place.count().exec(function (err, count) {
//           if (err) return next(err);
//           res.status = 200;
//           res.send({
//             places: place,
//             current: page,
//             pages: Math.ceil(count / perPage),
//           });
//         });
//       });
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
//get all by user
const getAllPlace = async (req, res) => {
  try {
    const place = await Place.find();
    res.json(place);
  } catch (error) {
    res.json({ message: error });
  }
};
//get by id
const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params._id);
    res.json(place);
  } catch (error) {
    res.json({ message: error });
  }
};
// create only by user
const createPlace = async (req, res) => {
  const place = new Place({
    name: req.body.name,
    country: req.body.country,
    images: req.body.images,
    description: req.body.description,
  });
  try {
    const saveplace = await place.save();
    res.json(saveplace);
  } catch (err) {
    res.json({ message: err });
  }
};
//delete only by admin
const deletePlace = async (req, res) => {
  try {
    const removedplace = await Place.findByIdAndRemove(req.params._id);
    res.json(removedplace);
  } catch (err) {
    res.json({ message: err });
  }
};
// //update by id by admin and mod
const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.updateOne(
      {
        _id: req.params._id,
      },
      {
        $set: {
          Name: req.body.Name,
          Country: req.body.Country,
          URL_Image: req.body.URL_Image,
          Description: req.body.Description,
        },
      }
    );
    res.json(updatedPlace);
  } catch (err) {
    res.json({ messgae: err });
  }
};

module.exports = {
  getAllPlace,
  getPlaceById,
  createPlace,
  deletePlace,
  updatePlace,
};
