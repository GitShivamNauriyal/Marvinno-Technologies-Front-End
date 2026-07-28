const express = require("express");
const router = express.Router();
const { submitInquiry, getInquiries } = require("../controllers/contactController");
const { protect, adminOnly } = require("../middleware/auth");

router.post("/", submitInquiry);                       // public
router.get("/", protect, adminOnly, getInquiries);

module.exports = router;
