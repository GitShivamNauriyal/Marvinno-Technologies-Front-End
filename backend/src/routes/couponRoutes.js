const express = require("express");
const router = express.Router();
const { validateCoupon, getCoupons, createCoupon, updateCoupon } = require("../controllers/couponController");
const { protect, adminOnly } = require("../middleware/auth");

router.post("/validate", validateCoupon);              // public — frontend uses this
router.get("/", protect, adminOnly, getCoupons);
router.post("/", protect, adminOnly, createCoupon);
router.put("/:id", protect, adminOnly, updateCoupon);

module.exports = router;
