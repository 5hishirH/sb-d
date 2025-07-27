"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.updatePassword = exports.updateUser = exports.resetPassword = exports.forgotPassword = exports.verifyEmail = exports.getVerificationEmail = exports.getUserProfile = exports.verifyLoginState = exports.loginUser = exports.registerUser = void 0;
const user_model_1 = require("../../../models/user.model");
const AppError_1 = require("../../../utils/AppError");
const asyncHandler_1 = require("../../../utils/asyncHandler");
const crypto_1 = __importDefault(require("crypto"));
const sendMailWithNodeMailer_service_1 = require("../../../services/sendMailWithNodeMailer.service");
const constants_1 = require("../../../config/constants");
const env_1 = require("../../../config/env");
const auth_service_1 = require("../../../features/v1/auth/auth.service");
exports.registerUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const cookieName = process.env.AUTH_COOKIE_NAME;
    if (!cookieName) {
        throw AppError_1.AppError.internal();
    }
    const { name, email, password, dateOfBirth, occupation, institution, year, phone, address, } = req.body;
    const existingUser = await user_model_1.User.findOne({ email });
    if (existingUser) {
        throw AppError_1.AppError.conflict("User with this email already exists");
    }
    const user = await user_model_1.User.create({
        name,
        email,
        password,
        dateOfBirth,
        occupation,
        institution,
        year,
        phone,
        address,
    });
    (0, auth_service_1.generateAuthCookie)(user._id, res);
    res.status(201).json({
        success: true,
        message: "User account created successfully",
    });
});
exports.loginUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, password } = req.body;
    const user = await user_model_1.User.findOne({ email }).select("+password");
    if (!user || !user.isActive) {
        throw AppError_1.AppError.unauthorized("Invalid credentials");
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        throw AppError_1.AppError.forbidden("Invalid credentials");
    }
    (0, auth_service_1.generateAuthCookie)(user._id, res);
    res.status(200).json({
        success: true,
        message: "Login successful",
    });
});
exports.verifyLoginState = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    if (!req.user) {
        throw AppError_1.AppError.forbidden("Authentication required.");
    }
    res.status(200).json({
        success: true,
        message: "User is authenticated",
    });
});
exports.getUserProfile = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const user = req.user;
    if (!user) {
        throw AppError_1.AppError.notFound("User not found");
    }
    res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        data: {
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                dateOfBirth: user.dateOfBirth,
                phone: user.phone,
                address: user.address,
                occupation: user.occupation,
                institution: user.institution,
                year: user.year,
                isActive: user.isActive,
                isVerified: user.isVerified,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        },
    });
});
exports.getVerificationEmail = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email } = req.body;
    const user = await user_model_1.User.findOne({ email });
    if (!user) {
        throw AppError_1.AppError.notFound("User not found.");
    }
    if (user.isVerified) {
        throw AppError_1.AppError.badRequest("This account has already been verified.");
    }
    if (user.emailVerificationTokenExpires &&
        user.emailVerificationTokenExpires > new Date(Date.now() - 5 * 60 * 1000)) {
        throw AppError_1.AppError.badRequest("A verification email was recently sent. Please check your inbox or wait 5 minutes before requesting another.");
    }
    const verificationToken = user.generateEmailVerificationToken();
    await user.save({ validateBeforeSave: false });
    const hostUrl = `${req.protocol}://${req.get("host")}`;
    try {
        await (0, auth_service_1.sendVerificationEmail)(email, hostUrl, verificationToken);
        res.status(200).json({
            success: true,
            message: "Verification email sent successfully.",
        });
    }
    catch (error) {
        user.emailVerificationToken = undefined;
        user.emailVerificationTokenExpires = undefined;
        await user.save({ validateBeforeSave: false });
        console.log(error);
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
    res.status(200).send(constants_1.verifyEmailView);
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
        await (0, sendMailWithNodeMailer_service_1.sendMailWithNodeMailer)({
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
    res.status(200).json({
        success: true,
        message: "Password has been reset successfully.",
    });
});
exports.updateUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const updateData = req.body;
    const userId = req.user?._id;
    const user = await user_model_1.User.findById(userId);
    if (!user) {
        throw AppError_1.AppError.forbidden();
    }
    await user_model_1.User.findByIdAndUpdate(userId, updateData, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        success: true,
        message: "Updated user data successfully",
    });
});
exports.updatePassword = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user?._id;
    const user = await user_model_1.User.findById(userId).select("+password");
    if (!user) {
        throw AppError_1.AppError.notFound("User not found.");
    }
    const isPasswordCorrect = await user.comparePassword(currentPassword);
    if (!isPasswordCorrect) {
        throw AppError_1.AppError.forbidden("Incorrect current password.");
    }
    user.password = newPassword;
    await user.save();
    res.status(200).json({
        success: true,
        message: "Password updated successfully.",
    });
});
exports.logout = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    if (!req.user) {
        throw AppError_1.AppError.forbidden("Authentication required.");
    }
    const logoutCookieOptions = { ...constants_1.cookieOptions };
    delete logoutCookieOptions["maxAge"];
    res.clearCookie(env_1.env.AUTH_COOKIE_NAME, logoutCookieOptions);
    res
        .status(200)
        .json({ success: true, message: "User logged out successfully" });
});
//# sourceMappingURL=auth.controller.js.map