const Coupon = require("../models/Coupon");

// POST /api/coupons/validate
const validateCoupon = async (req, res, next) => {
    try {
        const { code } = req.body;
        if (!code) return res.status(400).json({ success: false, message: "Coupon code required" });

        const coupon = await Coupon.findOne({ code: code.toUpperCase().trim() });

        if (!coupon || !coupon.isActive) {
            return res.status(404).json({ success: false, message: "Invalid or expired coupon code" });
        }

        if (coupon.expiresAt && coupon.expiresAt < new Date()) {
            return res.status(400).json({ success: false, message: "Coupon has expired" });
        }

        if (coupon.usageLimit !== null && coupon.usedCount >= coupon.usageLimit) {
            return res.status(400).json({ success: false, message: "Coupon usage limit reached" });
        }

        res.json({
            success: true,
            code: coupon.code,
            discountPercent: coupon.discountPercent,
            description: coupon.description,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/coupons  [admin]
const getCoupons = async (req, res, next) => {
    try {
        const coupons = await Coupon.find().sort({ createdAt: -1 });
        res.json({ success: true, count: coupons.length, coupons });
    } catch (err) {
        next(err);
    }
};

// POST /api/coupons  [admin]
const createCoupon = async (req, res, next) => {
    try {
        const coupon = await Coupon.create(req.body);
        res.status(201).json({ success: true, coupon });
    } catch (err) {
        next(err);
    }
};

// PUT /api/coupons/:id  [admin]
const updateCoupon = async (req, res, next) => {
    try {
        const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!coupon) return res.status(404).json({ success: false, message: "Coupon not found" });
        res.json({ success: true, coupon });
    } catch (err) {
        next(err);
    }
};

module.exports = { validateCoupon, getCoupons, createCoupon, updateCoupon };
