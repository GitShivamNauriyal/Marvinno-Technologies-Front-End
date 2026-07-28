const express = require("express");
const router = express.Router();
const { signup, login, getMe, updateMe, forgotPassword, resetPassword } = require("../controllers/authController");
const { protect } = require("../middleware/auth");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", protect, getMe);
router.put("/me", protect, updateMe);

module.exports = router;
