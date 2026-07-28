const Inquiry = require("../models/Inquiry");
const { sendEmail } = require("../utils/email");

// POST /api/contact
const submitInquiry = async (req, res, next) => {
    try {
        const { firstname, phone, email, address, message } = req.body;
        if (!firstname || !phone || !email || !message) {
            return res.status(400).json({ success: false, message: "firstname, phone, email, message required" });
        }

        const inquiry = await Inquiry.create({ firstname, phone, email, address, message });

        // Notify admin
        try {
            await sendEmail({
                to: process.env.SMTP_USER,
                subject: `New Contact Inquiry from ${firstname}`,
                html: `
                    <h2>New Inquiry — Marvinno Website</h2>
                    <p><strong>Name:</strong> ${firstname}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Address:</strong> ${address || "N/A"}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            });

            // Auto-reply to user
            await sendEmail({
                to: email,
                subject: "We received your message — Marvinno Technologies",
                html: `<p>Hi ${firstname},</p><p>Thank you for contacting Marvinno Technologies. We'll get back to you within 24 hours.</p><br/><p>Team Marvinno</p>`,
            });
        } catch (emailErr) {
            console.warn("Email send failed (non-fatal):", emailErr.message);
        }

        res.status(201).json({ success: true, message: "Inquiry submitted successfully", inquiry });
    } catch (err) {
        next(err);
    }
};

// GET /api/contact  [admin]
const getInquiries = async (req, res, next) => {
    try {
        const { isRead, page = 1, limit = 20 } = req.query;
        const filter = isRead !== undefined ? { isRead: isRead === "true" } : {};
        const inquiries = await Inquiry.find(filter)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit));
        const total = await Inquiry.countDocuments(filter);
        res.json({ success: true, total, inquiries });
    } catch (err) {
        next(err);
    }
};

module.exports = { submitInquiry, getInquiries };
