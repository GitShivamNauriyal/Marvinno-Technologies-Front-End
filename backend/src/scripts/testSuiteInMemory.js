/**
 * Automated Production Pre-Flight Test Suite
 * Spin up in-memory MongoDB + Express server, execute all unit & API tests, and verify production readiness.
 */
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test_jwt_secret_key_2026";
process.env.RAZORPAY_KEY_ID = "rzp_test_placeholder";
process.env.RAZORPAY_KEY_SECRET = "rzp_secret_placeholder";

const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Import models & routes
const User = require("../models/User");
const Product = require("../models/Product");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Payment = require("../models/Payment");
const Coupon = require("../models/Coupon");
const Inquiry = require("../models/Inquiry");
const Review = require("../models/Review");

const authRoutes = require("../routes/authRoutes");
const productRoutes = require("../routes/productRoutes");
const cartRoutes = require("../routes/cartRoutes");
const orderRoutes = require("../routes/orderRoutes");
const paymentRoutes = require("../routes/paymentRoutes");
const couponRoutes = require("../routes/couponRoutes");
const contactRoutes = require("../routes/contactRoutes");
const reviewRoutes = require("../routes/reviewRoutes");
const adminRoutes = require("../routes/adminRoutes");
const errorHandler = require("../middleware/errorHandler");

let mongoServer;
let server;
let BASE_URL = "";

let userToken = "";
let adminToken = "";
let createdOrderId = "";
let createdReviewId = "";

let passed = 0;
let failed = 0;
const results = [];

const test = async (name, fn) => {
    try {
        await fn();
        console.log(`  ✅ ${name}`);
        passed++;
        results.push({ name, status: "PASS" });
    } catch (err) {
        console.log(`  ❌ ${name}: ${err.message}`);
        failed++;
        results.push({ name, status: "FAIL", error: err.message });
    }
};

const assert = (condition, msg) => {
    if (!condition) throw new Error(msg || "Assertion failed");
};

const req = async (method, path, body, token) => {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const opts = { method, headers };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(`${BASE_URL}${path}`, opts);
    const data = await res.json().catch(() => ({}));
    return { status: res.status, data };
};

async function setup() {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/health", (req, res) => res.json({ success: true, status: "OK" }));

    app.use("/api/auth", authRoutes);
    app.use("/api/products", productRoutes);
    app.use("/api/cart", cartRoutes);
    app.use("/api/orders", orderRoutes);
    app.use("/api/payments", paymentRoutes);
    app.use("/api/coupons", couponRoutes);
    app.use("/api/contact", contactRoutes);
    app.use("/api/reviews", reviewRoutes);
    app.use("/api/admin", adminRoutes);
    app.use(errorHandler);

    await new Promise((resolve) => {
        server = app.listen(0, () => {
            const port = server.address().port;
            BASE_URL = `http://127.0.0.1:${port}`;
            resolve();
        });
    });
}

async function teardown() {
    if (server) server.close();
    await mongoose.disconnect();
    if (mongoServer) await mongoServer.stop();
}

async function runTests() {
    console.log("\n🧪 Running Marvinno E2E Backend & Database Validation Suite...\n");

    // 1. Health
    console.log("📦 1. Health & Server");
    await test("GET /health -> 200 OK", async () => {
        const { status, data } = await req("GET", "/health");
        assert(status === 200 && data.status === "OK");
    });

    // 2. Auth Flow
    console.log("\n📦 2. Authentication & Authorization");
    await test("POST /api/auth/signup -> Register new user with hashed password", async () => {
        const { status, data } = await req("POST", "/api/auth/signup", {
            name: "John Doe",
            email: "john@example.com",
            phone: "9876543210",
            password: "SecurePassword123",
            address: "New Delhi",
        });
        assert(status === 201, `Status: ${status}`);
        assert(data.token, "Token should be returned");
        assert(data.user.email === "john@example.com");
        userToken = data.token;
    });

    await test("POST /api/auth/signup -> Reject duplicate email with 409", async () => {
        const { status } = await req("POST", "/api/auth/signup", {
            name: "John Dup",
            email: "john@example.com",
            phone: "9876543210",
            password: "SecurePassword123",
        });
        assert(status === 409);
    });

    await test("POST /api/auth/login -> Login user & return JWT", async () => {
        const { status, data } = await req("POST", "/api/auth/login", {
            email: "john@example.com",
            password: "SecurePassword123",
        });
        assert(status === 200);
        assert(data.token);
    });

    await test("POST /api/auth/login -> Reject wrong password with 401", async () => {
        const { status } = await req("POST", "/api/auth/login", {
            email: "john@example.com",
            password: "WrongPassword",
        });
        assert(status === 401);
    });

    await test("GET /api/auth/me -> Return current user profile", async () => {
        const { status, data } = await req("GET", "/api/auth/me", null, userToken);
        assert(status === 200);
        assert(data.user.name === "John Doe");
    });

    // Admin Creation
    await test("DB Admin Seed -> Create Admin User", async () => {
        const adminUser = await User.create({
            name: "Admin User",
            email: "admin@marvinno.in",
            phone: "9999999999",
            passwordHash: "AdminPass123",
            role: "admin",
        });
        adminToken = jwt.sign({ id: adminUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        assert(adminToken);
    });

    // 3. Products
    console.log("\n📦 3. Products Management");
    await test("POST /api/products -> Admin create smart switch product", async () => {
        const { status, data } = await req("POST", "/api/products", {
            name: "Module S",
            slug: "module-s",
            fullform: "Single Socket",
            price: 5990,
            series: "SPECTRUM",
            size: "4M",
            touchbuttons: "2",
            loadcapacity: "1 x 25A Socket and 1 x 10A Switch",
            maxloadsocket: "1 x 2500W",
            maxloadswitch: "1 x 300W",
            color: "Base: Black and White",
            frame: "Frame: Gold and Chrome",
        }, adminToken);
        assert(status === 201);
        assert(data.product.slug === "module-s");
    });

    await test("GET /api/products -> Public fetch products list", async () => {
        const { status, data } = await req("GET", "/api/products");
        assert(status === 200);
        assert(data.products.length === 1);
    });

    await test("GET /api/products/:slug -> Public fetch single product detail", async () => {
        const { status, data } = await req("GET", "/api/products/module-s");
        assert(status === 200);
        assert(data.product.name === "Module S");
    });

    // 4. Cart
    console.log("\n📦 4. Persistent Shopping Cart");
    await test("POST /api/cart -> Add item to user cart", async () => {
        const { status, data } = await req("POST", "/api/cart", {
            productId: "module-s",
            name: "Module S",
            price: 5990,
            img: "/s-module.png",
            quantity: 2,
        }, userToken);
        assert(status === 200);
        assert(data.cart.items.length === 1);
        assert(data.cart.items[0].quantity === 2);
    });

    await test("GET /api/cart -> Get user cart contents", async () => {
        const { status, data } = await req("GET", "/api/cart", null, userToken);
        assert(status === 200);
        assert(data.cart.items[0].productId === "module-s");
    });

    await test("PUT /api/cart/:productId -> Update item quantity", async () => {
        const { status, data } = await req("PUT", "/api/cart/module-s", { quantity: 3 }, userToken);
        assert(status === 200);
        assert(data.cart.items[0].quantity === 3);
    });

    // 5. Coupons
    console.log("\n📦 5. Coupons & Discounts");
    await test("POST /api/coupons -> Admin create coupon MARVINNO2026", async () => {
        const { status, data } = await req("POST", "/api/coupons", {
            code: "MARVINNO2026",
            discountPercent: 10,
            isActive: true,
            description: "10% Launch Offer",
        }, adminToken);
        assert(status === 201);
        assert(data.coupon.code === "MARVINNO2026");
    });

    await test("POST /api/coupons/validate -> Public validate coupon code", async () => {
        const { status, data } = await req("POST", "/api/coupons/validate", { code: "MARVINNO2026" });
        assert(status === 200);
        assert(data.discountPercent === 10);
    });

    // 6. Orders
    console.log("\n📦 6. Order Processing");
    await test("POST /api/orders -> User create checkout order", async () => {
        const { status, data } = await req("POST", "/api/orders", {
            items: [{ productId: "module-s", name: "Module S", price: 5990, quantity: 2 }],
            shippingDetails: {
                receiverName: "John Doe",
                phone: "9876543210",
                address: "123 Smart St",
                city: "New Delhi",
                pincode: "110095",
                state: "Delhi",
            },
            subtotal: 11980,
            couponCode: "MARVINNO2026",
            discountAmount: 1198,
            totalAmount: 10782,
        }, userToken);
        assert(status === 201);
        assert(data.order._id);
        createdOrderId = data.order._id;
    });

    await test("GET /api/orders -> Fetch user order history", async () => {
        const { status, data } = await req("GET", "/api/orders", null, userToken);
        assert(status === 200);
        assert(data.orders.length === 1);
    });

    await test("PUT /api/orders/:id/status -> Admin update order status to shipped", async () => {
        const { status, data } = await req("PUT", `/api/orders/${createdOrderId}/status`, { status: "shipped" }, adminToken);
        assert(status === 200);
        assert(data.order.status === "shipped");
    });

    // 7. Manual Payments (Walk-in / Direct Local Sales)
    console.log("\n📦 7. Manual Payments (Local Purchases)");
    await test("POST /api/payments/manual -> Log local walk-in payment", async () => {
        const { status, data } = await req("POST", "/api/payments/manual", {
            name: "Mayank Agarwal",
            phone: "9811002233",
            email: "mayank@example.com",
            address: "Dehradun",
            amount: 5990,
            notes: "Walk-in purchase at experience center",
        });
        assert(status === 201);
        assert(data.payment.type === "manual");
        assert(data.payment.amount === 5990);
    });

    // 8. Contact Form
    console.log("\n📦 8. Contact & Inquiry Form");
    await test("POST /api/contact -> Public submit inquiry form", async () => {
        const { status, data } = await req("POST", "/api/contact", {
            firstname: "Pawan",
            phone: "9876000000",
            email: "pawan@example.com",
            address: "Noida",
            message: "Need bulk inquiry for hotel automation project",
        });
        assert(status === 201);
        assert(data.inquiry._id);
    });

    // 9. Reviews
    console.log("\n📦 9. Reviews & Moderation");
    await test("POST /api/reviews -> User submit review", async () => {
        const { status, data } = await req("POST", "/api/reviews", {
            name: "Rohit Agarwal",
            city: "Noida",
            message: "Great smart switch board, voice control works fast!",
            rating: 5,
        });
        assert(status === 201);
        assert(data.review.isApproved === false);
        createdReviewId = data.review._id;
    });

    await test("PUT /api/reviews/:id -> Admin approve review", async () => {
        const { status, data } = await req("PUT", `/api/reviews/${createdReviewId}`, { isApproved: true }, adminToken);
        assert(status === 200);
        assert(data.review.isApproved === true);
    });

    await test("GET /api/reviews -> Public fetch approved reviews", async () => {
        const { status, data } = await req("GET", "/api/reviews");
        assert(status === 200);
        assert(data.reviews.length === 1);
    });

    // 10. Admin Dashboard
    console.log("\n📦 10. Admin Analytics Dashboard");
    await test("GET /api/admin/dashboard -> Fetch store metrics", async () => {
        const { status, data } = await req("GET", "/api/admin/dashboard", null, adminToken);
        assert(status === 200);
        assert(data.dashboard.totalOrders === 1);
        assert(data.dashboard.totalPayments === 1);
        assert(data.dashboard.revenue === 5990);
    });
}

(async () => {
    try {
        await setup();
        await runTests();
        await teardown();

        console.log("\n===================================================");
        console.log(`  E2E Test Results: ${passed} Passed, ${failed} Failed`);
        console.log("===================================================\n");

        if (failed > 0) process.exit(1);
    } catch (err) {
        console.error("Test runner error:", err);
        await teardown();
        process.exit(1);
    }
})();
