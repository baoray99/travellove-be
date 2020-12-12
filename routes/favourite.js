const express = require("express");
const router = express.Router();
const FoodController = require("../controllers/foodcontroller");
const auth = require("../middleware/auth");

router.get("/foods/:userId", auth, FoodController.getAllFoodByUser);

module.exports = router;
