const express = require("express");
const router = express.Router();
const { getApprovedReviews, createReview, moderateReview, getAllReviews } = require("../controllers/reviewController");
const { protect, adminOnly } = require("../middleware/auth");

router.get("/", getApprovedReviews);                   // public
router.post("/", createReview);                        // optional auth
router.get("/admin", protect, adminOnly, getAllReviews);
router.put("/:id", protect, adminOnly, moderateReview);

module.exports = router;
