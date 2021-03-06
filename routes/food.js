const express = require("express");
const router = express.Router();
const FoodController = require("../controllers/foodcontroller");
const auth = require("../middleware/auth");

router.get("/:userId", auth, FoodController.getAllFoodByUser);
router.get("/", auth, FoodController.getAllFood);
router.get("/:_id", auth, FoodController.getFoodById);
router.post("/", auth, FoodController.createFood);
router.delete("/:_id", auth, FoodController.deleteFood);
router.put("/:_id", auth, FoodController.updateFood);

module.exports = router;
