const mongoose = require("mongoose");
const dns = require("dns");

// Force Google/Cloudflare public DNS servers to resolve MongoDB Atlas SRV records on Windows
try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
    dns.setDefaultResultOrder("ipv4first");
} catch (e) {
    console.warn("DNS override notice:", e.message);
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
