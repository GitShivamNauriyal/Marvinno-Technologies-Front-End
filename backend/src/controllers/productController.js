const Product = require("../models/Product");

// GET /api/products
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json({ success: true, count: products.length, products });
    } catch (err) {
        next(err);
    }
};

// GET /api/products/:slug
const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        res.json({ success: true, product });
    } catch (err) {
        next(err);
    }
};

// POST /api/products  [admin]
const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, product });
    } catch (err) {
        next(err);
    }
};

// PUT /api/products/:slug  [admin]
const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findOneAndUpdate(
            { slug: req.params.slug },
            req.body,
            { new: true, runValidators: true }
        );
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        res.json({ success: true, product });
    } catch (err) {
        next(err);
    }
};

// DELETE /api/products/:slug  [admin]
const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findOneAndDelete({ slug: req.params.slug });
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        res.json({ success: true, message: "Product deleted" });
    } catch (err) {
        next(err);
    }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
