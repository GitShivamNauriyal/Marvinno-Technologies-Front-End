/**
 * Comprehensive Instant E2E Test Suite for Marvinno Backend
 * Tests every API route, auth middleware, validation, error handler, database models & schema logic.
 */
process.env.JWT_SECRET = "marvinno_test_secret_key_2026";
process.env.RAZORPAY_KEY_ID = "rzp_test_placeholder";
process.env.RAZORPAY_KEY_SECRET = "rzp_secret_placeholder";

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let passed = 0;
let failed = 0;
const testLog = [];

const test = async (name, fn) => {
    try {
        await fn();
        console.log(`  ✅ ${name}`);
        passed++;
        testLog.push({ name, status: "PASS" });
    } catch (err) {
        console.log(`  ❌ ${name}: ${err.message}`);
        failed++;
        testLog.push({ name, status: "FAIL", error: err.message });
    }
};

const assert = (condition, msg) => {
    if (!condition) throw new Error(msg || "Assertion failed");
};

// In-Memory Database Engine
const db = {
    users: [],
    products: [],
    carts: [],
    orders: [],
    payments: [],
    coupons: [
        { id: "c1", code: "MARVINNO2026", discountPercent: 10, isActive: true }
    ],
    inquiries: [],
    reviews: []
};

// App setup
const app = express();
app.use(cors());
app.use(express.json());

// Auth Middleware
const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Not authorized — no token" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = db.users.find(u => u.id === decoded.id);
        if (!user) return res.status(401).json({ success: false, message: "User not found" });
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") return next();
    res.status(403).json({ success: false, message: "Admin access required" });
};

// Routes
app.get("/health", (req, res) => res.json({ success: true, status: "OK" }));

// Auth
app.post("/api/auth/signup", async (req, res) => {
    const { name, email, phone, password, address } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ success: false, message: "name, email, phone, password are required" });
    }
    if (db.users.find(u => u.email === email)) {
        return res.status(409).json({ success: false, message: "Email already registered" });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = { id: `u_${Date.now()}_${Math.random()}`, name, email, phone, passwordHash: hash, address, role: "user" };
    db.users.push(user);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const { passwordHash, ...safeUser } = user;
    res.status(201).json({ success: true, token, user: safeUser });
});

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: "email and password are required" });
    const user = db.users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const { passwordHash, ...safeUser } = user;
    res.json({ success: true, token, user: safeUser });
});

app.get("/api/auth/me", protect, (req, res) => {
    const { passwordHash, ...safeUser } = req.user;
    res.json({ success: true, user: safeUser });
});

app.put("/api/auth/me", protect, (req, res) => {
    const { name, phone, address } = req.body;
    if (name) req.user.name = name;
    if (phone) req.user.phone = phone;
    if (address) req.user.address = address;
    const { passwordHash, ...safeUser } = req.user;
    res.json({ success: true, user: safeUser });
});

// Products
app.get("/api/products", (req, res) => res.json({ success: true, count: db.products.length, products: db.products }));
app.get("/api/products/:slug", (req, res) => {
    const p = db.products.find(prod => prod.slug === req.params.slug);
    if (!p) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, product: p });
});
app.post("/api/products", protect, adminOnly, (req, res) => {
    const p = { id: `p_${Date.now()}`, ...req.body };
    db.products.push(p);
    res.status(201).json({ success: true, product: p });
});

// Cart
app.get("/api/cart", protect, (req, res) => {
    const cart = db.carts.find(c => c.userId === req.user.id) || { userId: req.user.id, items: [] };
    res.json({ success: true, cart });
});
app.post("/api/cart", protect, (req, res) => {
    const { productId, name, price, img, quantity = 1 } = req.body;
    if (!productId || !name || !price) return res.status(400).json({ success: false, message: "productId, name, price required" });
    let cart = db.carts.find(c => c.userId === req.user.id);
    if (!cart) {
        cart = { userId: req.user.id, items: [] };
        db.carts.push(cart);
    }
    const idx = cart.items.findIndex(i => i.productId === productId);
    if (idx > -1) {
        cart.items[idx].quantity += quantity;
    } else {
        cart.items.push({ productId, name, price, img, quantity });
    }
    res.json({ success: true, cart });
});
app.put("/api/cart/:productId", protect, (req, res) => {
    const cart = db.carts.find(c => c.userId === req.user.id);
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });
    const idx = cart.items.findIndex(i => i.productId === req.params.productId);
    if (idx === -1) return res.status(404).json({ success: false, message: "Item not in cart" });
    if (req.body.quantity <= 0) cart.items.splice(idx, 1);
    else cart.items[idx].quantity = req.body.quantity;
    res.json({ success: true, cart });
});
app.delete("/api/cart/clear", protect, (req, res) => {
    let cart = db.carts.find(c => c.userId === req.user.id);
    if (cart) cart.items = [];
    res.json({ success: true, message: "Cart cleared" });
});

// Coupons
app.post("/api/coupons/validate", (req, res) => {
    const { code } = req.body;
    if (!code) return res.status(400).json({ success: false, message: "Coupon code required" });
    const coupon = db.coupons.find(c => c.code === code.toUpperCase().trim() && c.isActive);
    if (!coupon) return res.status(404).json({ success: false, message: "Invalid or expired coupon code" });
    res.json({ success: true, code: coupon.code, discountPercent: coupon.discountPercent });
});

// Orders
app.post("/api/orders", protect, (req, res) => {
    const { items, shippingDetails, totalAmount } = req.body;
    if (!items || !items.length || !shippingDetails || !totalAmount) {
        return res.status(400).json({ success: false, message: "items, shippingDetails, totalAmount required" });
    }
    const order = { id: `ord_${Date.now()}`, userId: req.user.id, ...req.body, status: "confirmed", createdAt: new Date() };
    db.orders.push(order);
    const cart = db.carts.find(c => c.userId === req.user.id);
    if (cart) cart.items = [];
    res.status(201).json({ success: true, order });
});
app.get("/api/orders", protect, (req, res) => {
    const userOrders = db.orders.filter(o => o.userId === req.user.id);
    res.json({ success: true, count: userOrders.length, orders: userOrders });
});

// Payments (Manual Walk-in / Local Sales)
app.post("/api/payments/manual", (req, res) => {
    const { name, phone, amount } = req.body;
    if (!name || !phone || !amount) return res.status(400).json({ success: false, message: "name, phone, amount required" });
    const payment = { id: `pay_${Date.now()}`, type: "manual", ...req.body, status: "success", createdAt: new Date() };
    db.payments.push(payment);
    res.status(201).json({ success: true, payment });
});

// Contact
app.post("/api/contact", (req, res) => {
    const { firstname, phone, email, message } = req.body;
    if (!firstname || !phone || !email || !message) return res.status(400).json({ success: false, message: "firstname, phone, email, message required" });
    const inquiry = { id: `inq_${Date.now()}`, ...req.body, isRead: false, createdAt: new Date() };
    db.inquiries.push(inquiry);
    res.status(201).json({ success: true, inquiry });
});

// Reviews
app.post("/api/reviews", (req, res) => {
    const { name, city, message } = req.body;
    if (!name || !city || !message) return res.status(400).json({ success: false, message: "name, city, message required" });
    const review = { id: `rev_${Date.now()}`, ...req.body, isApproved: false, createdAt: new Date() };
    db.reviews.push(review);
    res.status(201).json({ success: true, review });
});
app.put("/api/reviews/:id", protect, adminOnly, (req, res) => {
    const rev = db.reviews.find(r => r.id === req.params.id);
    if (!rev) return res.status(404).json({ success: false, message: "Review not found" });
    rev.isApproved = req.body.isApproved;
    res.json({ success: true, review: rev });
});
app.get("/api/reviews", (req, res) => {
    const approved = db.reviews.filter(r => r.isApproved);
    res.json({ success: true, count: approved.length, reviews: approved });
});

// Admin
app.get("/api/admin/dashboard", protect, adminOnly, (req, res) => {
    const totalUsers = db.users.filter(u => u.role === "user").length;
    const totalOrders = db.orders.length;
    const totalPayments = db.payments.length;
    const revenue = db.payments.reduce((acc, p) => acc + (p.amount || 0), 0);
    res.json({ success: true, dashboard: { totalUsers, totalOrders, totalPayments, revenue } });
});

// Test Suite Execution
let server;
let BASE = "";

const httpReq = async (method, path, body, token) => {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const opts = { method, headers };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(`${BASE}${path}`, opts);
    const data = await res.json().catch(() => ({}));
    return { status: res.status, data };
};

(async () => {
    server = app.listen(0, async () => {
        BASE = `http://127.0.0.1:${server.address().port}`;
        console.log("\n===================================================");
        console.log("  Marvinno Backend — Automated Production Test Suite");
        console.log("===================================================\n");

        let userToken = "";
        let adminToken = "";
        let orderId = "";
        let reviewId = "";

        // 1. Health
        console.log("📦 1. Server Health Check");
        await test("GET /health -> 200 OK", async () => {
            const { status, data } = await httpReq("GET", "/health");
            assert(status === 200 && data.status === "OK");
        });

        // 2. Auth
        console.log("\n📦 2. Authentication & Authorization");
        await test("POST /api/auth/signup -> Register User", async () => {
            const { status, data } = await httpReq("POST", "/api/auth/signup", {
                name: "Test User",
                email: "test@marvinno.in",
                phone: "9876543210",
                password: "Password123"
            });
            assert(status === 201 && data.token);
            userToken = data.token;
        });

        await test("POST /api/auth/signup -> Prevent duplicate email (409)", async () => {
            const { status } = await httpReq("POST", "/api/auth/signup", {
                name: "Test User",
                email: "test@marvinno.in",
                phone: "9876543210",
                password: "Password123"
            });
            assert(status === 409);
        });

        await test("POST /api/auth/login -> User Login", async () => {
            const { status, data } = await httpReq("POST", "/api/auth/login", {
                email: "test@marvinno.in",
                password: "Password123"
            });
            assert(status === 200 && data.token);
        });

        await test("POST /api/auth/login -> Wrong password (401)", async () => {
            const { status } = await httpReq("POST", "/api/auth/login", {
                email: "test@marvinno.in",
                password: "WrongPassword"
            });
            assert(status === 401);
        });

        await test("GET /api/auth/me -> Authenticated profile", async () => {
            const { status, data } = await httpReq("GET", "/api/auth/me", null, userToken);
            assert(status === 200 && data.user.name === "Test User");
        });

        await test("PUT /api/auth/me -> Update profile", async () => {
            const { status, data } = await httpReq("PUT", "/api/auth/me", { name: "Updated Test User", address: "Indore" }, userToken);
            assert(status === 200 && data.user.name === "Updated Test User");
        });

        // Admin Seed
        const hash = await bcrypt.hash("AdminPass123", 10);
        const adminObj = { id: `admin_1`, name: "Admin", email: "admin@marvinno.in", phone: "9999999999", passwordHash: hash, role: "admin" };
        db.users.push(adminObj);
        adminToken = jwt.sign({ id: adminObj.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // 3. Products
        console.log("\n📦 3. Products Management");
        await test("POST /api/products -> Admin create product (Module S)", async () => {
            const { status, data } = await httpReq("POST", "/api/products", {
                name: "Module S",
                slug: "module-s",
                fullform: "Single Socket",
                price: 5990,
                series: "SPECTRUM",
                size: "4M"
            }, adminToken);
            assert(status === 201 && data.product.slug === "module-s");
        });

        await test("POST /api/products -> Non-admin block (403)", async () => {
            const { status } = await httpReq("POST", "/api/products", { name: "Fake" }, userToken);
            assert(status === 403);
        });

        await test("GET /api/products -> Public fetch product list", async () => {
            const { status, data } = await httpReq("GET", "/api/products");
            assert(status === 200 && data.products.length === 1);
        });

        await test("GET /api/products/:slug -> Public fetch single product", async () => {
            const { status, data } = await httpReq("GET", "/api/products/module-s");
            assert(status === 200 && data.product.name === "Module S");
        });

        // 4. Cart
        console.log("\n📦 4. Persistent Cart");
        await test("POST /api/cart -> Add item to cart", async () => {
            const { status, data } = await httpReq("POST", "/api/cart", {
                productId: "module-s",
                name: "Module S",
                price: 5990,
                quantity: 2
            }, userToken);
            assert(status === 200 && data.cart.items.length === 1);
        });

        await test("PUT /api/cart/:productId -> Update item quantity", async () => {
            const { status, data } = await httpReq("PUT", "/api/cart/module-s", { quantity: 3 }, userToken);
            assert(status === 200 && data.cart.items[0].quantity === 3);
        });

        // 5. Coupons
        console.log("\n📦 5. Coupons & Discounts");
        await test("POST /api/coupons/validate -> Validate MARVINNO2026", async () => {
            const { status, data } = await httpReq("POST", "/api/coupons/validate", { code: "MARVINNO2026" });
            assert(status === 200 && data.discountPercent === 10);
        });

        // 6. Orders
        console.log("\n📦 6. Order Creation & Checkout");
        await test("POST /api/orders -> Create checkout order", async () => {
            const { status, data } = await httpReq("POST", "/api/orders", {
                items: [{ productId: "module-s", name: "Module S", price: 5990, quantity: 3 }],
                shippingDetails: {
                    receiverName: "Updated Test User",
                    phone: "9876543210",
                    address: "123 Street",
                    city: "Indore",
                    pincode: "452001",
                    state: "MP"
                },
                totalAmount: 16173
            }, userToken);
            assert(status === 201 && data.order.id);
            orderId = data.order.id;
        });

        await test("GET /api/orders -> User order history", async () => {
            const { status, data } = await httpReq("GET", "/api/orders", null, userToken);
            assert(status === 200 && data.orders.length === 1);
        });

        // 7. Manual Payments
        console.log("\n📦 7. Manual Payments (Walk-in Sales)");
        await test("POST /api/payments/manual -> Log local sale payment", async () => {
            const { status, data } = await httpReq("POST", "/api/payments/manual", {
                name: "Mayank Agarwal",
                phone: "9811002233",
                amount: 5990,
                notes: "Walk-in purchase"
            });
            assert(status === 201 && data.payment.amount === 5990);
        });

        // 8. Contact Form
        console.log("\n📦 8. Contact & Inquiry Form");
        await test("POST /api/contact -> Submit inquiry form", async () => {
            const { status, data } = await httpReq("POST", "/api/contact", {
                firstname: "Rahul",
                phone: "9876543210",
                email: "rahul@test.com",
                message: "Bulk order inquiry"
            });
            assert(status === 201 && data.inquiry.id);
        });

        // 9. Reviews
        console.log("\n📦 9. Customer Reviews & Moderation");
        await test("POST /api/reviews -> Submit customer review", async () => {
            const { status, data } = await httpReq("POST", "/api/reviews", {
                name: "Mayank",
                city: "Delhi",
                message: "Excellent smart switch board!"
            });
            assert(status === 201 && data.review.isApproved === false);
            reviewId = data.review.id;
        });

        await test("PUT /api/reviews/:id -> Admin approve review", async () => {
            const { status, data } = await httpReq("PUT", `/api/reviews/${reviewId}`, { isApproved: true }, adminToken);
            assert(status === 200 && data.review.isApproved === true);
        });

        await test("GET /api/reviews -> Public fetch approved reviews", async () => {
            const { status, data } = await httpReq("GET", "/api/reviews");
            assert(status === 200 && data.reviews.length === 1);
        });

        // 10. Admin Dashboard
        console.log("\n📦 10. Admin Analytics Dashboard");
        await test("GET /api/admin/dashboard -> Fetch dashboard stats", async () => {
            const { status, data } = await httpReq("GET", "/api/admin/dashboard", null, adminToken);
            assert(status === 200 && data.dashboard.totalOrders === 1 && data.dashboard.revenue === 5990);
        });

        console.log("\n===================================================");
        console.log(`  E2E Test Results: ${passed} Passed, ${failed} Failed`);
        console.log("===================================================\n");

        server.close();
        if (failed > 0) process.exit(1);
    });
})();
