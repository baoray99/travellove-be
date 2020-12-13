const express = require("express");
const router = express.Router();
// const FoodController = require("../controllers/foodcontroller");
// const HotelController = require("../controllers/hotelcontroller");
// const HotPlaceController = require("../controllers/hotplacecontroller");
const FavController = require("../controllers/favouritecontroller");
const auth = require("../middleware/auth");

// router.get("/foods/:userId", auth, FoodController.getAllFoodByUser);
// router.get("/hotels/:userId", auth, HotelController.getAllHotelByUser);
// router.get("/hotplaces/:userId", auth, HotPlaceController.getAllHotPlaceByUser);
router.get("/:userId", auth, FavController.getFavourite);

module.exports = router;
