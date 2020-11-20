const express = require("express");
const router = express.Router();
const HotelController = require("../controllers/hotelcontroller");
const auth = require("../middleware/auth");

router.get("/", auth, HotelController.getAll);
router.get("/:_id", auth, HotelController.getByHotelId);
router.get("/place/:placeId", auth, HotelController.getByPlaceId);
router.post("/", auth, HotelController.createHotel);

module.exports = router;
