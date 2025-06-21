"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.refreshAccessToken = exports.logoutUser = exports.login = exports.register = void 0;
const user_model_1 = require("../models/user.model");
const AppError_1 = require("../utils/AppError");
const jwt_1 = require("../utils/jwt");
const asyncHandler_1 = require("../utils/asyncHandler");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ms_1 = __importDefault(require("ms"));
exports.register = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, email, password, role } = req.body;
    const existingUser = await user_model_1.User.findOne({ email });
    if (existingUser) {
        throw AppError_1.AppError.forbidden("User with this email already exists");
    }
    const user = await user_model_1.User.create({
        name,
        email,
        password,
        role,
    });
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
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
    const refreshToken = await user.generateRefreshToken();
    res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
            accessToken,
            refreshToken,
        },
    });
});
exports.logoutUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const user = req.user;
    if (!user) {
        throw AppError_1.AppError.notFound("User not found");
    }
    await user_model_1.User.findByIdAndUpdate(user._id, {
        $unset: {
            refreshToken: 1,
        },
    }, {
        new: true,
    });
    return res.status(200).json({ success: true });
});
exports.refreshAccessToken = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
        throw AppError_1.AppError.unauthorized();
    }
    try {
        const decodedToken = jsonwebtoken_1.default.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await user_model_1.User.findById(decodedToken?._id);
        if (!user) {
            throw AppError_1.AppError.unauthorized("Invalid refresh token");
        }
        if (incomingRefreshToken !== user.refreshToken) {
            throw AppError_1.AppError.unauthorized("Refresh token is expired or used");
        }
        const accessToken = (0, jwt_1.generateToken)(user._id.toString());
        const refreshToken = await user.generateRefreshToken();
        const accessTokenExpiresIn = (0, ms_1.default)(process.env.JWT_EXPIRES_IN || "5m");
        return res.status(200).json({ accessToken, refreshToken, accessTokenExpiresIn });
    }
    catch (error) {
        switch (error.name) {
            case "TokenExpiredError":
                throw AppError_1.AppError.unauthorized("Refresh token expired");
            case "JsonWebTokenError":
                throw AppError_1.AppError.badRequest("Invalid refresh token");
            default:
                const statusCode = error.statusCode || 500;
                const message = error.message || "An error occurred during refreshing access token";
                throw new AppError_1.AppError(statusCode, message);
        }
    }
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
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        },
    });
});
//# sourceMappingURL=auth.controller.js.map