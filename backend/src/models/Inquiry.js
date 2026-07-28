const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true, trim: true },
        phone: { type: String, required: true },
        email: { type: String, required: true, lowercase: true },
        address: { type: String },
        message: { type: String, required: true },
        isRead: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
