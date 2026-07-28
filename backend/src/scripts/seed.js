/**
 * Seed initial data: default coupon MARVINNO2026
 * Run: node src/scripts/seed.js
 */
require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");

try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
    dns.setDefaultResultOrder("ipv4first");
} catch (e) {}

const Coupon = require("../models/Coupon");

const seed = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

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
    console.log("✅ Coupon MARVINNO2026 seeded successfully into Atlas DB");

    await mongoose.disconnect();
    console.log("Done.");
};

seed().catch((err) => {
    console.error("Seed error:", err.message);
    process.exit(1);
});
