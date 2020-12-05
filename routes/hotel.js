const express = require("express");
const router = express.Router();
const HotelController = require("../controllers/hotelcontroller");
const auth = require("../middleware/auth");

router.get("/", auth, HotelController.getAllHotel);
router.get("/:_id", auth, HotelController.getHotelById);
router.post("/", auth, HotelController.createHotel);
router.delete("/:_id", auth, HotelController.deleteHotel);
router.put("/:_id", auth, HotelController.updateHotel);

module.exports = router;
