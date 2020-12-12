const Hotel = require("../models/hotel");
const Place = require("../models/place");
const HotPlace = require("../models/hotplace");
const Food = require("../models/food");
const User = require("../models/user");
const Comment = require("../models/comment");

// create comment
const createComment = async (req, res) => {
  const thingHotel = await Hotel.findOne({ _id: req.body.ofWhatId });
  const thingPlace = await Place.findOne({ _id: req.body.ofWhatId });
  const thingHotPlace = await HotPlace.findOne({ _id: req.body.ofWhatId });
  const thingFood = await Food.findOne({ _id: req.body.ofWhatId });
  const user = await User.findOne({ _id: req.body.userId });

  const comment = new Comment({
    userId: req.body.userId,
    user: user,
    ofWhatId: req.body.ofWhatId,
    ofWhat: thingHotel
      ? thingHotel
      : thingPlace
      ? thingPlace
      : thingFood
      ? thingFood
      : thingHotPlace,
    content: req.body.content,
  });
  try {
    const saveComment = await comment.save();
    res.json({ message: "Create comment success !", saveComment });
  } catch (error) {
    res.json({ message: error });
  }
};

//Update comment
const updateComment = async (req, res) => {
  const thingHotel = await Hotel.findOne({ _id: req.body.ofWhatId });
  const thingPlace = await Place.findOne({ _id: req.body.ofWhatId });
  const thingHotPlace = await HotPlace.findOne({ _id: req.body.ofWhatId });
  const thingFood = await Food.findOne({ _id: req.body.ofWhatId });
  const user = await User.findOne({ _id: req.body.userId });
  try {
    const updatedComment = await Comment.updateOne(
      { _id: req.params._id },
      {
        $set: {
          userId: req.body.userId,
          user: user,
          ofWhatId: req.body.ofWhatId,
          ofWhat: thingHotel
            ? thingHotel
            : thingPlace
            ? thingPlace
            : thingFood
            ? thingFood
            : thingHotPlace,
          content: req.body.content,
        },
      }
    );
    res.json({ message: "Update comment success !", updatedComment });
  } catch (error) {
    res.json({ message: error });
  }
};

//delete comment
const deleteComment = async (req, res) => {
  try {
    const removeComment = await Comment.remove({ _id: req.params._id });
    res.json({ message: "Delete comment success !", removeComment });
  } catch (error) {
    res.json({ message: error });
  }
};
// get all comment by user
const getAllByUser = async (req, res) => {
  try {
    const comment = await Comment.find({ userId: req.params.userId });
    res.json(comment);
  } catch (error) {
    res.json({ message: error });
  }
};
// get all comment by hotel
const getAllByThing = async (req, res) => {
  try {
    const comment = await Comment.find({
      ofWhatId: req.params.ofWhatId,
    }).select("content user.avatar user.name userId");
    res.json(comment);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = {
  createComment,
  getAllByUser,
  getAllByThing,
  updateComment,
  deleteComment,
};
