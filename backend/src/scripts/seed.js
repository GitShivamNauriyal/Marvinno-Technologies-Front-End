/**
 * Seed initial data: default coupon MARVINNO2026
 * Run: node src/scripts/seed.js
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Coupon = require("../models/Coupon");

const seed = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Seed default coupon
    await Coupon.findOneAndUpdate(
        { code: "MARVINNO2026" },
        {
            code: "MARVINNO2026",
            discountPercent: 10,
            isActive: true,
            description: "10% off — launch offer",
            usageLimit: null,
        },
        { upsert: true, new: true }
    );
    console.log("✅ Coupon MARVINNO2026 seeded");

    await mongoose.disconnect();
    console.log("Done.");
};

seed().catch((err) => {
    console.error(err);
    process.exit(1);
});
