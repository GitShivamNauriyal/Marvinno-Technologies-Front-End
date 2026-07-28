/**
 * Drop all data from all collections (test cleanup)
 * Run: node src/scripts/clearDB.js
 * WARNING: This deletes ALL data — only use in development/test
 */
require("dotenv").config();
const mongoose = require("mongoose");

const clear = async () => {
    if (process.env.NODE_ENV === "production") {
        console.error("❌ REFUSED: cannot run clearDB in production!");
        process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const collections = await mongoose.connection.db.listCollections().toArray();
    for (const col of collections) {
        await mongoose.connection.db.dropCollection(col.name);
        console.log(`🗑  Dropped: ${col.name}`);
    }

    await mongoose.disconnect();
    console.log("✅ All collections cleared.");
};

clear().catch((err) => {
    console.error(err);
    process.exit(1);
});
