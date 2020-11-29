const express = require("express");
const router = express.Router();
const HotPlaceController = require("../controllers/hotplacecontroller");
const auth = require("../middleware/auth");

router.get("/", auth, HotPlaceController.getAllHotPlace);
router.get("/:_id", auth, HotPlaceController.getHotPlaceById);
router.get("/place/:placeId", auth, HotPlaceController.getHotPlaceByPlaceId);
router.post("/", auth, HotPlaceController.createHotPlace);
router.delete("/:_id", auth, HotPlaceController.deleteHotPlace);
router.put("/:_id", auth, HotPlaceController.updateHotPlace);

module.exports = router;
