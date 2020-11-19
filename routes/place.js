const express = require("express");
const router = express.Router();
const PlaceController = require("../controllers/placecontroller");
const auth = require("../middleware/auth");

router.get("/", auth, PlaceController.getAll);
router.get("/:_id", auth, PlaceController.getById);
router.post("/", auth, PlaceController.createPlace);

module.exports = router;
