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
const getAll = async (req, res) => {
  try {
    const place = await Place.find();
    res.json(place);
  } catch (error) {
    res.json({ message: error });
  }
};
//get by id
const getById = async (req, res) => {
  try {
    const place = await Place.findById(req.params._id);
    res.json(place);
  } catch (error) {
    res.json({ message: error });
  }
};
// create only by user
const createPlace = async (req, res) => {
  const place = new Place(req.body);
  try {
    const saveplace = await place.save();
    res.json(saveplace);
  } catch (err) {
    res.json({ message: err });
  }
};
// //delete only by admin
// router.delete("/:_id", auth, async (req, res) => {
//   if (req.user.isAdmin === true) {
//     try {
//       const removedplace = await Place.findByIdAndRemove(req.params._id);
//       res.json(removedplace);
//     } catch (err) {
//       res.json({ message: err });
//     }
//   } else {
//     res.status(400).send({ message: "Only admin is permitted" });
//   }
// });
// //update by id by admin and mod
// router.put("/:_id", auth, async (req, res) => {
//   if (req.user.isAdmin === true || req.user.isMod === true) {
//     try {
//       const updatedPlace = await Place.updateOne(
//         {
//           _id: req.params._id,
//         },
//         {
//           $set: {
//             Name: req.body.Name,
//             Country: req.body.Country,
//             URL_Image: req.body.URL_Image,
//             Description: req.body.Description,
//           },
//         }
//       );
//       res.json(updatedPlace);
//     } catch (err) {
//       res.json({ messgae: err });
//     }
//   } else {
//     res.status(400).send({ message: "Only admin and mod is permitted" });
//   }
// });

module.exports = {
  getAll,
  getById,
  createPlace,
};
