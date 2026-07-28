const express = require("express");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const { protect, adminOnly } = require("../middleware/auth");

router.get("/", getProducts);
router.get("/:slug", getProduct);
router.post("/", protect, adminOnly, createProduct);
router.put("/:slug", protect, adminOnly, updateProduct);
router.delete("/:slug", protect, adminOnly, deleteProduct);

module.exports = router;
