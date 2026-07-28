const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true },
        fullform: { type: String, required: true },
        price: { type: Number, required: true },
        series: { type: String, enum: ["SPECTRUM", "2M"], default: "SPECTRUM" },
        size: { type: String },
        touchbuttons: { type: String },
        loadcapacity: { type: String },
        maxloadsocket: { type: String },
        maxloadswitch: { type: String },
        color: { type: String },
        frame: { type: String },
        sensor: { type: String },
        bgcolor: { type: String },
        images: [{ type: String }],
        inStock: { type: Boolean, default: true },
        salesCount: { type: Number, default: 0 },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
