const Order = require("../models/Order");
const Cart = require("../models/Cart");

// POST /api/orders
const createOrder = async (req, res, next) => {
    try {
        const { items, shippingDetails, subtotal, couponCode, discountAmount, totalAmount, paymentId, razorpayOrderId } = req.body;

        if (!items || !items.length || !shippingDetails || !totalAmount) {
            return res.status(400).json({ success: false, message: "items, shippingDetails, totalAmount required" });
        }

        const order = await Order.create({
            userId: req.user?._id,
            customerEmail: req.user?.email,
            items,
            shippingDetails,
            subtotal,
            couponCode,
            discountAmount: discountAmount || 0,
            totalAmount,
            paymentId,
            razorpayOrderId,
            status: paymentId ? "confirmed" : "pending",
        });

        // Auto-clear cart after order
        if (req.user) {
            await Cart.findOneAndUpdate({ userId: req.user._id }, { items: [] });
        }

        res.status(201).json({ success: true, order });
    } catch (err) {
        next(err);
    }
};

// GET /api/orders — user's orders
const getMyOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
        res.json({ success: true, count: orders.length, orders });
    } catch (err) {
        next(err);
    }
};

// GET /api/orders/:id
const getOrderById = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ success: false, message: "Order not found" });

        // Only owner or admin
        if (String(order.userId) !== String(req.user._id) && req.user.role !== "admin") {
            return res.status(403).json({ success: false, message: "Not authorized" });
        }

        res.json({ success: true, order });
    } catch (err) {
        next(err);
    }
};

// PUT /api/orders/:id/status  [admin]
const updateOrderStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const validStatuses = ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "refunded"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status" });
        }

        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) return res.status(404).json({ success: false, message: "Order not found" });
        res.json({ success: true, order });
    } catch (err) {
        next(err);
    }
};

// GET /api/orders/admin — all orders [admin]
const getAllOrders = async (req, res, next) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;
        const filter = status ? { status } : {};
        const orders = await Order.find(filter)
            .populate("userId", "name email phone")
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit));
        const total = await Order.countDocuments(filter);
        res.json({ success: true, total, page: parseInt(page), orders });
    } catch (err) {
        next(err);
    }
};

module.exports = { createOrder, getMyOrders, getOrderById, updateOrderStatus, getAllOrders };
