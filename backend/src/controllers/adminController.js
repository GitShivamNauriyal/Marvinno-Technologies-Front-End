const User = require("../models/User");
const Order = require("../models/Order");
const Payment = require("../models/Payment");
const Inquiry = require("../models/Inquiry");

// GET /api/admin/dashboard
const getDashboard = async (req, res, next) => {
    try {
        const [totalUsers, totalOrders, totalPayments, unreadInquiries] = await Promise.all([
            User.countDocuments({ role: "user" }),
            Order.countDocuments(),
            Payment.countDocuments({ status: "success" }),
            Inquiry.countDocuments({ isRead: false }),
        ]);

        const revenueAgg = await Payment.aggregate([
            { $match: { status: "success" } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);
        const revenue = revenueAgg[0]?.total || 0;

        const pendingOrders = await Order.countDocuments({ status: "pending" });

        res.json({
            success: true,
            dashboard: { totalUsers, totalOrders, totalPayments, unreadInquiries, revenue, pendingOrders },
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/admin/users
const getUsers = async (req, res, next) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const users = await User.find()
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit));
        const total = await User.countDocuments();
        res.json({ success: true, total, page: parseInt(page), users });
    } catch (err) {
        next(err);
    }
};

module.exports = { getDashboard, getUsers };
