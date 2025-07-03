"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.verifyEmail = exports.sendVerificationEmail = exports.getProfile = exports.login = exports.register = void 0;
const user_model_1 = require("../models/user.model");
const AppError_1 = require("../utils/AppError");
const jwt_1 = require("../utils/jwt");
const asyncHandler_1 = require("../utils/asyncHandler");
const crypto_1 = __importDefault(require("crypto"));
const sendMailWithMailtrap_1 = require("../utils/sendMailWithMailtrap");
exports.register = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await user_model_1.User.findOne({ email });
    if (existingUser) {
        throw AppError_1.AppError.forbidden("User with this email already exists");
    }
    const user = await user_model_1.User.create({
        name,
        email,
        password,
    });
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
        },
    });
});
exports.login = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, password } = req.body;
    const user = await user_model_1.User.findOne({ email }).select("+password");
    if (!user || !user.isActive) {
        throw AppError_1.AppError.unauthorized("Invalid credentials");
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        throw AppError_1.AppError.unauthorized("Invalid credentials");
    }
    const accessToken = (0, jwt_1.generateToken)(user._id.toString());
    res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.accountRole,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
            accessToken,
        },
    });
});
exports.getProfile = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const user = req.user;
    if (!user) {
        throw AppError_1.AppError.notFound("User not found");
    }
    res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.accountRole,
                isActive: user.isActive,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        },
    });
});
exports.sendVerificationEmail = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email } = req.body;
    const user = await user_model_1.User.findOne({ email });
    if (!user) {
        throw AppError_1.AppError.notFound("User not found.");
    }
    if (user.isVerified) {
        throw AppError_1.AppError.badRequest("This account has already been verified.");
    }
    const verificationToken = user.generateEmailVerificationToken();
    await user.save({ validateBeforeSave: false });
    const verificationURL = `${req.protocol}://${req.get("host")}/api/auth/verify-email/${verificationToken}`;
    const message = `Please verify your email by clicking this link: ${verificationURL}\nThis link will expire in 10 minutes.`;
    try {
        await (0, sendMailWithMailtrap_1.sendMailWithMailtrap)({
            to: user.email,
            subject: "Science Bee - Email Verification",
            text: message,
        });
        res.status(200).json({
            success: true,
            message: "Verification email sent successfully.",
        });
    }
    catch (err) {
        user.emailVerificationToken = undefined;
        user.emailVerificationTokenExpires = undefined;
        await user.save({ validateBeforeSave: false });
        console.log(err);
        throw AppError_1.AppError.internal("There was an error sending the email. Please try again later.");
    }
});
exports.verifyEmail = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { token } = req.params;
    const hashedToken = crypto_1.default.createHash("sha256").update(token).digest("hex");
    const user = await user_model_1.User.findOne({
        emailVerificationToken: hashedToken,
        emailVerificationTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
        throw AppError_1.AppError.badRequest("Token is invalid or has expired.");
    }
    user.isVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationTokenExpires = undefined;
    await user.save();
    res
        .status(200)
        .json({ success: true, message: "Email verified successfully!" });
});
exports.forgotPassword = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email } = req.body;
    const user = await user_model_1.User.findOne({ email });
    if (!user) {
        return res.status(200).json({
            success: true,
            message: "If a user with that email exists, a password reset link has been sent.",
        });
    }
    const resetToken = user.generatePasswordResetToken();
    await user.save({ validateBeforeSave: false });
    const resetURL = `${req.protocol}://${req.get("host")}/api/auth/reset-password/${resetToken}`;
    const message = `To reset your password, please click this link: ${resetURL}\nThis link will expire in 10 minutes.`;
    try {
        await (0, sendMailWithMailtrap_1.sendMailWithMailtrap)({
            to: user.email,
            subject: "Science Bee - Password Reset",
            text: message,
        });
        return res.status(200).json({
            success: true,
            message: "If a user with that email exists, a password reset link has been sent.",
        });
    }
    catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpires = undefined;
        await user.save({ validateBeforeSave: false });
        throw AppError_1.AppError.internal("There was an error sending the email. Please try again later.");
    }
});
exports.resetPassword = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    const hashedToken = crypto_1.default.createHash("sha256").update(token).digest("hex");
    const user = await user_model_1.User.findOne({
        passwordResetToken: hashedToken,
        passwordResetTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
        throw AppError_1.AppError.badRequest("Token is invalid or has expired.");
    }
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    await user.save();
    res
        .status(200)
        .json({
        success: true,
        message: "Password has been reset successfully.",
    });
});
//# sourceMappingURL=auth.controller.js.map