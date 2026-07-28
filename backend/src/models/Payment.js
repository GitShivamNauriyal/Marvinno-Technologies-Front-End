const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
        type: { type: String, enum: ["razorpay", "manual"], required: true },
        // Razorpay fields
        razorpayOrderId: { type: String },
        razorpayPaymentId: { type: String },
        razorpaySignature: { type: String },
        // Manual payment (MakePayment.jsx walk-in)
        name: { type: String },
        phone: { type: String },
        email: { type: String },
        address: { type: String },
        // Common
        amount: { type: Number, required: true },
        currency: { type: String, default: "INR" },
        status: { type: String, enum: ["pending", "success", "failed", "refunded"], default: "pending" },
        notes: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
