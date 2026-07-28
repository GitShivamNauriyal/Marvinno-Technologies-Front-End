const express = require("express");
const router = express.Router();
const { getCart, addToCart, updateCartItem, removeCartItem, clearCart } = require("../controllers/cartController");
const { protect } = require("../middleware/auth");

router.use(protect); // all cart routes require auth

router.get("/", getCart);
router.post("/", addToCart);
router.put("/:productId", updateCartItem);
router.delete("/clear", clearCart);
router.delete("/:productId", removeCartItem);

module.exports = router;
