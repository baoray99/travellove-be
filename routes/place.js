const express = require("express");
const router = express.Router();
const PlaceController = require("../controllers/placecontroller");
const auth = require("../middleware/auth");

router.get("/", auth, PlaceController.getAllPlace);
router.get("/:_id", auth, PlaceController.getPlaceById);
router.post("/", auth, PlaceController.createPlace);
router.delete("/:_id", auth, PlaceController.deletePlace);
router.put("/:_id", auth, PlaceController.updatePlace);
router.get("/search/:nameplace", auth, PlaceController.searchPlace);

module.exports = router;
