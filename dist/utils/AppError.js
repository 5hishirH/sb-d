"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.data = null;
        this.errors = errors;
        this.isOperational = true;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    static badRequest(message, errors = []) {
        return new AppError(400, message, errors);
    }
    static unauthorized(message = "Unauthorized") {
        return new AppError(401, message);
    }
    static forbidden(message = "Forbidden") {
        return new AppError(403, message);
    }
    static notFound(message = "Not found") {
        return new AppError(404, message);
    }
    static conflict(message = "Conflict") {
        return new AppError(409, message);
    }
    static internal(message = "Internal server error") {
        return new AppError(500, message);
    }
}
exports.AppError = AppError;
//# sourceMappingURL=AppError.js.map