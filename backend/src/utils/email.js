const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, html }) => {
    // If SMTP credentials are missing, safely log email details to console without throwing
    if (!process.env.SMTP_PASS || !process.env.SMTP_USER) {
        console.log(`[Email Notice — SMTP_PASS not set] To: ${to} | Subject: ${subject}`);
        return { messageId: "dev-mock-id" };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || "Marvinno Technologies <noreply@marvinno.in>",
        to,
        subject,
        html,
    });
    return info;
};

module.exports = { sendEmail };
