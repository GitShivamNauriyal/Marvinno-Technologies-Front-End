const crypto = require("crypto");
const Razorpay = require("razorpay");
const Payment = require("../models/Payment");
const Order = require("../models/Order");

const getRazorpayInstance = () => {
    return new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
};

// POST /api/payments/create-order  — Step 1: create Razorpay order
const createRazorpayOrder = async (req, res, next) => {
    try {
        const { amount, currency = "INR", notes = {} } = req.body;
        if (!amount || amount <= 0) {
            return res.status(400).json({ success: false, message: "Valid amount required" });
        }

        const razorpay = getRazorpayInstance();
        const razorpayOrder = await razorpay.orders.create({
            amount: Math.round(amount * 100), // paise
            currency,
            notes,
        });

        res.json({
            success: true,
            razorpayOrderId: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            key: process.env.RAZORPAY_KEY_ID,
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/payments/verify  — Step 2: verify Razorpay payment signature
const verifyRazorpayPayment = async (req, res, next) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId, amount } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ success: false, message: "Missing Razorpay fields" });
        }

        // Verify signature
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Payment verification failed — invalid signature" });
        }

        // Log payment
        const payment = await Payment.create({
            userId: req.user?._id,
            orderId,
            type: "razorpay",
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
            amount: amount || 0,
            status: "success",
        });

        // Update order payment status
        if (orderId) {
            await Order.findByIdAndUpdate(orderId, {
                paymentId: razorpay_payment_id,
                razorpayOrderId: razorpay_order_id,
                status: "confirmed",
            });
        }

        res.json({ success: true, message: "Payment verified", payment });
    } catch (err) {
        next(err);
    }
};

// POST /api/payments/manual  — MakePayment.jsx walk-in / local sale
const createManualPayment = async (req, res, next) => {
    try {
        const { name, phone, email, address, amount, notes } = req.body;
        if (!name || !phone || !amount) {
            return res.status(400).json({ success: false, message: "name, phone, amount required" });
        }

        const payment = await Payment.create({
            userId: req.user?._id,
            type: "manual",
            name,
            phone,
            email,
            address,
            amount: parseFloat(amount),
            status: "success",
            notes,
        });

        res.status(201).json({ success: true, message: "Manual payment logged", payment });
    } catch (err) {
        next(err);
    }
};

// GET /api/payments/history  — logged-in user's payments
const getMyPayments = async (req, res, next) => {
    try {
        const payments = await Payment.find({ userId: req.user._id }).sort({ createdAt: -1 });
        res.json({ success: true, count: payments.length, payments });
    } catch (err) {
        next(err);
    }
};

// GET /api/payments/admin  — all payments [admin]
const getAllPayments = async (req, res, next) => {
    try {
        const { type, status, page = 1, limit = 20 } = req.query;
        const filter = {};
        if (type) filter.type = type;
        if (status) filter.status = status;

        const payments = await Payment.find(filter)
            .populate("userId", "name email")
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit));
        const total = await Payment.countDocuments(filter);

        res.json({ success: true, total, page: parseInt(page), payments });
    } catch (err) {
        next(err);
    }
};

module.exports = { createRazorpayOrder, verifyRazorpayPayment, createManualPayment, getMyPayments, getAllPayments };
