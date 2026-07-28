const crypto = require("crypto");
const User = require("../models/User");
const { generateToken } = require("../utils/jwt");
const { sendEmail } = require("../utils/email");

// POST /api/auth/signup
const signup = async (req, res, next) => {
    try {
        const { name, email, phone, password, address } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ success: false, message: "name, email, phone, password are required" });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(409).json({ success: false, message: "Email already registered" });
        }

        const user = await User.create({ name, email, phone, passwordHash: password, address });
        const token = generateToken(user._id);

        res.status(201).json({ success: true, token, user });
    } catch (err) {
        next(err);
    }
};

// POST /api/auth/login
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "email and password are required" });
        }

        const user = await User.findOne({ email }).select("+passwordHash");
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const token = generateToken(user._id);
        res.json({ success: true, token, user });
    } catch (err) {
        next(err);
    }
};

// GET /api/auth/me
const getMe = async (req, res) => {
    res.json({ success: true, user: req.user });
};

// PUT /api/auth/me
const updateMe = async (req, res, next) => {
    try {
        const { name, phone, address } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user._id,
            { name, phone, address },
            { new: true, runValidators: true }
        );
        res.json({ success: true, user });
    } catch (err) {
        next(err);
    }
};

// POST /api/auth/forgot-password
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            // Don't reveal user existence
            return res.json({ success: true, message: "If that email exists, a reset link has been sent." });
        }

        const token = crypto.randomBytes(32).toString("hex");
        user.resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
        user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 minutes
        await user.save({ validateBeforeSave: false });

        const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
        await sendEmail({
            to: user.email,
            subject: "Marvinno — Password Reset",
            html: `<p>You requested a password reset.</p><p><a href="${resetUrl}">Reset Password</a></p><p>This link expires in 15 minutes.</p>`,
        });

        res.json({ success: true, message: "Password reset email sent" });
    } catch (err) {
        next(err);
    }
};

// POST /api/auth/reset-password
const resetPassword = async (req, res, next) => {
    try {
        const { token, password } = req.body;
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
        }

        user.passwordHash = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        const newToken = generateToken(user._id);
        res.json({ success: true, token: newToken, message: "Password reset successful" });
    } catch (err) {
        next(err);
    }
};

module.exports = { signup, login, getMe, updateMe, forgotPassword, resetPassword };
