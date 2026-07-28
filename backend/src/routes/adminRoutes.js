const express = require("express");
const router = express.Router();
const { getDashboard, getUsers } = require("../controllers/adminController");
const { protect, adminOnly } = require("../middleware/auth");
const { getAllOrders } = require("../controllers/orderController");
const { getAllPayments } = require("../controllers/paymentController");
const { getInquiries } = require("../controllers/contactController");

router.use(protect, adminOnly);

router.get("/dashboard", getDashboard);
router.get("/users", getUsers);
router.get("/orders", getAllOrders);
router.get("/payments", getAllPayments);
router.get("/inquiries", getInquiries);

module.exports = router;
