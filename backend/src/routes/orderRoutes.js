const express = require("express");
const router = express.Router();
const { createOrder, getMyOrders, getOrderById, updateOrderStatus, getAllOrders } = require("../controllers/orderController");
const { protect, adminOnly } = require("../middleware/auth");

router.post("/", protect, createOrder);
router.get("/", protect, getMyOrders);
router.get("/admin", protect, adminOnly, getAllOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/status", protect, adminOnly, updateOrderStatus);

module.exports = router;
