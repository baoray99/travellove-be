const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/commentcontroller");
const auth = require("../middleware/auth");

router.post("/", auth, CommentController.createComment);
router.get("/user/:userId", auth, CommentController.getAllByUser);
router.get("/:ofWhatId", auth, CommentController.getAllByThing);

module.exports = router;
