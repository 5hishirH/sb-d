"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const AppError_1 = require("../utils/AppError");
const asyncHandler_1 = require("../utils/asyncHandler");
const validate = (schema) => {
    return (0, asyncHandler_1.asyncHandler)(async (req, _, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                const errorMessages = error.errors.map((err) => {
                    const path = err.path.slice(1).join(".");
                    return `${path}: ${err.message}`;
                });
                throw AppError_1.AppError.badRequest(`Validation failed: ${errorMessages.join(", ")}`);
            }
            throw error;
        }
    });
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map