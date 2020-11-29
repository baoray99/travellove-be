const Hotel = require("../models/hotel");
const Place = require("../models/placeDetail");
const User = require("../models/user");
const Comment = require("../models/comment");

// create comment
const createComment = async (req, res) => {
  const thingHotel = await Hotel.findOne({ _id: req.body.ofWhatId });
  const thingPlace = await Place.findOne({ _id: req.body.ofWhatId });
  const user = await User.findOne({ _id: req.body.userId });

  const comment = new Comment({
    userId: req.body.userId,
    user: user,
    ofWhatId: req.body.ofWhatId,
    ofWhat: thingHotel ? thingHotel : thingPlace,
    content: req.body.content,
    images: req.body.images,
    star: req.body.star,
  });
  try {
    const saveComment = await comment.save();
    res.json(saveComment);
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
const getAllByHotel = async (req, res) => {
  try {
    const comment = await Comment.find({ ofWhatId: req.params.ofWhatId });
    res.json(comment);
  } catch (error) {
    res.json({ message: error });
  }
};
// get all comment by place
const getAllByPlace = async (req, res) => {
  try {
    const comment = await Comment.find({ ofWhatId: req.params.ofWhatId });
    res.json(comment);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  createComment,
  getAllByUser,
  getAllByHotel,
  getAllByPlace,
};
