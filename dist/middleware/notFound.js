"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const AppError_1 = require("../utils/AppError");
const notFound = (req, res, next) => {
    const error = AppError_1.AppError.notFound(`Route ${req.originalUrl} not found`);
    next(error);
};
exports.notFound = notFound;
//# sourceMappingURL=notFound.js.map