const express = require("express");
const router = express.Router();
const { createRazorpayOrder, verifyRazorpayPayment, createManualPayment, getMyPayments, getAllPayments } = require("../controllers/paymentController");
const { protect, adminOnly } = require("../middleware/auth");

router.post("/create-order", protect, createRazorpayOrder);
router.post("/verify", protect, verifyRazorpayPayment);
router.post("/manual", createManualPayment);           // optional auth — walk-ins may not be logged in
router.get("/history", protect, getMyPayments);
router.get("/admin", protect, adminOnly, getAllPayments);

module.exports = router;
