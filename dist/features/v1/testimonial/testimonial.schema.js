"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTestimonialSchema = exports.createTestimonialSchema = exports.getTestimonialParams = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schema_1 = require("../../../schemas/common.schema");
const testimonial_model_1 = __importDefault(require("../../../models/testimonial.model"));
exports.getTestimonialParams = zod_1.default.object({
    params: zod_1.default.object({ testimonialId: common_schema_1.objectIdSchema }).refine(async ({ testimonialId }) => {
        const testimonialExists = await testimonial_model_1.default.exists({
            _id: testimonialId,
        });
        return !!testimonialExists;
    }, {
        message: "Testimonial with the requested id does not exist",
        path: ["testimonialId"],
    }),
});
exports.createTestimonialSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default
            .string({
            required_error: "Name is required",
        })
            .trim()
            .min(2, "Name must be at least 2 characters")
            .max(100, "Name cannot exceed 100 characters"),
        designation: zod_1.default
            .string({
            required_error: "Designation is required",
        })
            .trim()
            .min(2, "Designation must be at least 2 characters")
            .max(100, "Designation cannot exceed 100 characters"),
        avatarUrl: zod_1.default
            .string({ required_error: "Avatar URL is required" })
            .trim()
            .url("Avatar URL must be a valid URL"),
        quote: zod_1.default
            .string({ required_error: "Quote is required" })
            .trim()
            .min(15, "Quote must be at least 15 characters")
            .max(500, "Quote cannot exceed 500 characters"),
        isVisible: zod_1.default.boolean().default(true).optional(),
    }),
});
exports.updateTestimonialSchema = exports.getTestimonialParams.extend({
    body: zod_1.default
        .object({
        name: zod_1.default
            .string()
            .trim()
            .min(2, "Name must be at least 2 characters")
            .max(100, "Name cannot exceed 100 characters")
            .optional(),
        designation: zod_1.default
            .string()
            .trim()
            .min(2, "Designation must be at least 2 characters")
            .max(100, "Designation cannot exceed 100 characters")
            .optional(),
        avatarUrl: zod_1.default
            .string()
            .trim()
            .url("Avatar URL must be a valid URL")
            .optional(),
        quote: zod_1.default
            .string()
            .trim()
            .min(15, "Quote must be at least 15 characters")
            .max(500, "Quote cannot exceed 500 characters")
            .optional(),
        isVisible: zod_1.default.boolean().optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
//# sourceMappingURL=testimonial.schema.js.map