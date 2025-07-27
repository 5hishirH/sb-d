"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.getUserProfile = exports.loginUser = exports.getVerificationEmail = exports.registerUser = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const AppError_1 = require("../../../utils/AppError");
const user_model_1 = require("../../../models/user.model");
const env_1 = require("../../../config/env");
const auth_service_1 = require("../../../features/v1/auth/auth.service");
const auth_service_2 = require("../../../features/v1/auth/auth.service");
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
    (0, auth_service_2.generateAuthCookie)(user._id, res);
    res.status(201).json({
        success: true,
        message: "User account created successfully",
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
    (0, auth_service_2.generateAuthCookie)(user._id, res);
    res.status(200).json({
        success: true,
        message: "Login successful",
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
                id: user._id,
                name: user.name,
                email: user.email,
                accountRole: user.accountRole,
                isActive: user.isActive,
                isVerified: user.isVerified,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                phone: user.phone,
                address: user.address,
                occupation: user.occupation,
                institution: user.institution,
                year: user.year,
            },
        },
    });
});
exports.logoutUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    if (!req.user) {
        throw AppError_1.AppError.forbidden("Authentication required.");
    }
    res.clearCookie(env_1.env.AUTH_COOKIE_NAME);
    res
        .status(200)
        .json({ success: true, message: "User logged out successfully" });
});
//# sourceMappingURL=auth.controller.js.map