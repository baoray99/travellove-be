const express = require("express");
const router = express.Router();
const PlaceController = require("../controllers/placecontroller");
const HotPlaceController = require("../controllers/hotplacecontroller");
const HotelController = require("../controllers/hotelcontroller");
const FoodController = require("../controllers/foodcontroller");
const auth = require("../middleware/auth");
const Place = require("../models/place");

router.get("/search", auth, async (req, res) => {
  const q = req.query.q;
  const matchPlace = await Place.find({ name: new RegExp(q, "i") }).select(
    "name"
  );
  res.json(matchPlace);
});
router.get("/", auth, PlaceController.getAllPlace);
router.get("/:_id", auth, PlaceController.getPlaceById);
router.post("/", auth, PlaceController.createPlace);
router.delete("/:_id", auth, PlaceController.deletePlace);
router.put("/:_id", auth, PlaceController.updatePlace);
router.get(
  "/:placeId/hotplaces",
  auth,
  HotPlaceController.getHotPlaceByPlaceId
);
router.get("/:placeId/hotels", auth, HotelController.getHotelByPlaceId);
router.get("/:placeId/foods", auth, FoodController.getFoodByPlaceId);

module.exports = router;
