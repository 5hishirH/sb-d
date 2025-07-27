"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../utils/AppError");
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    console.error(err);
    if (err.name === "CastError") {
        const message = "Resource not found";
        error = AppError_1.AppError.notFound(message);
    }
    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = AppError_1.AppError.badRequest(message);
    }
    if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map((val) => ({
            field: val.path,
            message: val.message,
        }));
        error = AppError_1.AppError.badRequest("Validation failed", errors);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
        ...(error.errors && error.errors.length > 0 && { errors: error.errors }),
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map