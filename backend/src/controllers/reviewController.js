const Review = require("../models/Review");

// GET /api/reviews — public approved reviews
const getApprovedReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({ isApproved: true }).sort({ createdAt: -1 });
        res.json({ success: true, count: reviews.length, reviews });
    } catch (err) {
        next(err);
    }
};

// POST /api/reviews — submit review (auth optional)
const createReview = async (req, res, next) => {
    try {
        const { name, city, message, rating } = req.body;
        if (!name || !city || !message) {
            return res.status(400).json({ success: false, message: "name, city, message required" });
        }
        const review = await Review.create({
            userId: req.user?._id,
            name,
            city,
            message,
            rating: rating || 5,
            isApproved: false,
        });
        res.status(201).json({ success: true, message: "Review submitted and pending approval", review });
    } catch (err) {
        next(err);
    }
};

// PUT /api/reviews/:id  [admin] — approve or reject
const moderateReview = async (req, res, next) => {
    try {
        const { isApproved } = req.body;
        const review = await Review.findByIdAndUpdate(req.params.id, { isApproved }, { new: true });
        if (!review) return res.status(404).json({ success: false, message: "Review not found" });
        res.json({ success: true, review });
    } catch (err) {
        next(err);
    }
};

// GET /api/reviews/admin  [admin] — all reviews
const getAllReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.json({ success: true, count: reviews.length, reviews });
    } catch (err) {
        next(err);
    }
};

module.exports = { getApprovedReviews, createReview, moderateReview, getAllReviews };
