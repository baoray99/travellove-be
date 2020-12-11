const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  user: {
    type: Object,
    require: true,
  },
  ofWhatId: {
    type: String,
    require: true,
  },
  ofWhat: {
    type: Object,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
