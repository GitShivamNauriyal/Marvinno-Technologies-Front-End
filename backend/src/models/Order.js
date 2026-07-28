const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },   // snapshot at time of purchase
        img: { type: String },
        quantity: { type: Number, required: true, min: 1 },
    },
    { _id: false }
);

const shippingSchema = new mongoose.Schema(
    {
        receiverName: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: String, required: true },
        state: { type: String, required: true },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        customerEmail: { type: String },
        items: [orderItemSchema],
        shippingDetails: shippingSchema,
        subtotal: { type: Number, required: true },
        couponCode: { type: String },
        discountAmount: { type: Number, default: 0 },
        totalAmount: { type: Number, required: true },
        currency: { type: String, default: "INR" },
        paymentId: { type: String },
        razorpayOrderId: { type: String },
        status: {
            type: String,
            enum: ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "refunded"],
            default: "pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
