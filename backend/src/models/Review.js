const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: { type: String, required: true },
        city: { type: String, required: true },
        message: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5, default: 5 },
        isApproved: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
