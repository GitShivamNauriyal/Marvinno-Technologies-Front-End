const Cart = require("../models/Cart");

// GET /api/cart
const getCart = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id });
        res.json({ success: true, cart: cart || { items: [] } });
    } catch (err) {
        next(err);
    }
};

// POST /api/cart  — add or update item
const addToCart = async (req, res, next) => {
    try {
        const { productId, name, price, img, quantity = 1 } = req.body;
        if (!productId || !name || !price) {
            return res.status(400).json({ success: false, message: "productId, name, price required" });
        }

        let cart = await Cart.findOne({ userId: req.user._id });

        if (!cart) {
            cart = await Cart.create({ userId: req.user._id, items: [{ productId, name, price, img, quantity }] });
        } else {
            const idx = cart.items.findIndex((i) => i.productId === productId);
            if (idx > -1) {
                cart.items[idx].quantity += quantity;
            } else {
                cart.items.push({ productId, name, price, img, quantity });
            }
            await cart.save();
        }

        res.json({ success: true, cart });
    } catch (err) {
        next(err);
    }
};

// PUT /api/cart/:productId — update quantity
const updateCartItem = async (req, res, next) => {
    try {
        const { quantity } = req.body;
        const cart = await Cart.findOne({ userId: req.user._id });
        if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

        const idx = cart.items.findIndex((i) => i.productId === req.params.productId);
        if (idx === -1) return res.status(404).json({ success: false, message: "Item not in cart" });

        if (quantity <= 0) {
            cart.items.splice(idx, 1);
        } else {
            cart.items[idx].quantity = quantity;
        }

        await cart.save();
        res.json({ success: true, cart });
    } catch (err) {
        next(err);
    }
};

// DELETE /api/cart/:productId
const removeCartItem = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id });
        if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });
        cart.items = cart.items.filter((i) => i.productId !== req.params.productId);
        await cart.save();
        res.json({ success: true, cart });
    } catch (err) {
        next(err);
    }
};

// DELETE /api/cart/clear
const clearCart = async (req, res, next) => {
    try {
        await Cart.findOneAndUpdate({ userId: req.user._id }, { items: [] });
        res.json({ success: true, message: "Cart cleared" });
    } catch (err) {
        next(err);
    }
};

module.exports = { getCart, addToCart, updateCartItem, removeCartItem, clearCart };
