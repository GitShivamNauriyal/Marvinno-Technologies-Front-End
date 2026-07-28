const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        img: { type: String },
        quantity: { type: Number, required: true, min: 1, default: 1 },
    },
    { _id: false }
);

const cartSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
        items: [cartItemSchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
