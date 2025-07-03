"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactSubmission = void 0;
const contactSubmission_model_1 = __importDefault(require("../models/contactSubmission.model"));
const asyncHandler_1 = require("../utils/asyncHandler");
const nodemailer_1 = require("nodemailer");
const transport = (0, nodemailer_1.createTransport)({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});
exports.createContactSubmission = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { username, email, message } = req.body;
    const contactSubmission = await contactSubmission_model_1.default.create({
        username,
        email,
        message,
    });
    res.status(201).json({
        success: true,
        message: "Contact submitted successfully. Thank you!",
        data: contactSubmission,
    });
    const mailOptions = {
        from: `Contact Form <${process.env.NODEMAILER_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `New contact message from ${email}`,
        text: `User: ${username || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending contact submission email:", error);
        }
        else {
            console.log("Contact submission email sent successfully:", info.response);
        }
    });
});
//# sourceMappingURL=contactSubmission.controller.js.map