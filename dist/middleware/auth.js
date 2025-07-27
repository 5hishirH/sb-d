"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const AppError_1 = require("../utils/AppError");
const asyncHandler_1 = require("../utils/asyncHandler");
exports.authenticate = (0, asyncHandler_1.asyncHandler)(async (req, _, next) => {
    const token = req.cookies.zenith;
    if (!token) {
        throw AppError_1.AppError.forbidden("Authentication required.");
    }
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        console.error("JWT_SECRET is not configured in environment variables.");
        throw AppError_1.AppError.internal("Server configuration error.");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
        const user = await user_model_1.User.findById(decoded.userId).select("+password");
        if (!user) {
            throw AppError_1.AppError.unauthorized("The user belonging to this token does no longer exist.");
        }
        if (!user.isActive) {
            throw AppError_1.AppError.forbidden("User account is inactive. Please contact support.");
        }
        req.user = user;
        next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            throw AppError_1.AppError.unauthorized("Your token has expired. Please log in again.");
        }
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            throw AppError_1.AppError.unauthorized("Invalid token. Please log in again.");
        }
        throw error;
    }
});
const authorize = (...roles) => {
    return (0, asyncHandler_1.asyncHandler)(async (req, _, next) => {
        if (!req.user) {
            throw AppError_1.AppError.unauthorized("Authentication required. Please log in.");
        }
        if (!roles.includes(req.user.accountRole)) {
            throw AppError_1.AppError.forbidden("You do not have permission to perform this action.");
        }
        next();
    });
};
exports.authorize = authorize;
//# sourceMappingURL=auth.js.map