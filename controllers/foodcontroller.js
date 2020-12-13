const Food = require("../models/food");
const Place = require("../models/place");
//token gồm Bearer + token (sau Bearer có dấu cách)
//get all by page
// router.get("/", async (req, res, next) => {
//   try {
//     const perPage = parseInt(req.query.limit || 1000);
//     const page = parseInt(req.query.page || 1);
//     Food.find({})
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec(function (err, food) {
//         Food.count().exec(function (err, count) {
//           if (err) return next(err);
//           res.status = 200;
//           res.send({
//             food: food,
//             current: page,
//             pages: Math.ceil(count / perPage),
//           });
//         });
//       });
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
//get all food
const getAllFood = async (req, res) => {
  try {
    const food = await Food.find().select(
      "name mainimg star_rating price address "
    );
    res.json(food);
  } catch (error) {
    res.json({ message: error });
  }
};
//get by id
const getFoodByPlaceId = async (req, res) => {
  try {
    const food = await Food.find({ placeId: req.params.placeId }).select(
      "name mainimg star_rating price address"
    );
    res.json(food);
  } catch (err) {
    res.json({ message: err });
  }
};
//get by food id
const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params._id);
    res.json(food);
  } catch (err) {
    res.json({ message: err });
  }
};
// create only by admin
const createFood = async (req, res) => {
  const place = await Place.findOne({ _id: req.body.placeId });
  const food = new Food({
    name: req.body.name,
    placeId: req.body.placeId,
    place: place,
    address: req.body.address,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
    star_rating: req.body.star_rating,
    mainimg: req.body.mainimg,
    images: req.body.images,
  });
  try {
    const savefood = await food.save();
    res.json({ message: "Create food success !", savefood });
  } catch (err) {
    res.json({ message: err });
  }
};
//delete
const deleteFood = async (req, res) => {
  try {
    const removedfood = await Food.remove({ _id: req.params._id });
    res.json({ message: "Delete food success !", removedfood });
  } catch (err) {
    res.json({ messgae: err });
  }
};
//update by id
const updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.updateOne(
      { _id: req.params._id },
      {
        $set: {
          users: req.body.users,
        },
      }
    );
    res.json({ message: "Update food success !", updatedFood });
  } catch (err) {
    res.json({ messgae: err });
  }
};
const getAllFoodByUser = async (req, res) => {
  try {
    const foodFav = await Food.find({ users: req.params.userId }).select(
      "name users placeId mainimg address"
    );
    // console.log(foodFav);
    res.json(foodFav);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = {
  getAllFood,
  getFoodById,
  getFoodByPlaceId,
  createFood,
  deleteFood,
  updateFood,
  getAllFoodByUser,
};
