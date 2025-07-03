"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedback = void 0;
const feedback_model_1 = __importDefault(require("../models/feedback.model"));
const asyncHandler_1 = require("../utils/asyncHandler");
const nodemailer_1 = require("nodemailer");
const transport = (0, nodemailer_1.createTransport)({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});
exports.createFeedback = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { username, email, message } = req.body;
    const feedback = await feedback_model_1.default.create({ username, email, message });
    res.status(201).json({
        success: true,
        message: "Feedback submitted successfully. Thank you!",
        data: feedback,
    });
    const mailOptions = {
        from: `Feedback Form <${process.env.NODEMAILER_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `New Feedback from ${email}`,
        text: `User: ${username || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending feedback email:", error);
        }
        else {
            console.log("Feedback email sent successfully:", info.response);
        }
    });
});
//# sourceMappingURL=feedback.controller.js.map