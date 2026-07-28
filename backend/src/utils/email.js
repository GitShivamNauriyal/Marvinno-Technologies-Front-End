const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendEmail = async ({ to, subject, html }) => {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || "Marvinno Technologies <noreply@marvinno.in>",
        to,
        subject,
        html,
    });
    return info;
};

module.exports = { sendEmail };
