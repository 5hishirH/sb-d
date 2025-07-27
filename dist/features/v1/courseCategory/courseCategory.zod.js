"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseCategorySchema = exports.updateCourseCategorySchema = exports.getCourseCategorySchema = exports.createManyCourseCategorySchema = exports.createCourseCategorySchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../../../utils/zod");
const singleCourseCategorySchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: "Name is required" })
        .min(2, "Name must be at least 2 characters"),
    iconUrl: zod_1.z.string().url("Icon URL must be a valid URL"),
});
exports.createCourseCategorySchema = zod_1.z.object({
    body: singleCourseCategorySchema,
});
exports.createManyCourseCategorySchema = zod_1.z.object({
    body: zod_1.z
        .array(singleCourseCategorySchema)
        .refine((data) => Object.keys(data).length > 0, {
        message: "Request body cannot be empty. Please provide at least one category to create.",
    }),
});
exports.getCourseCategorySchema = zod_1.z.object({
    params: zod_1.z.object({
        categoryId: zod_2.objectIdSchema,
    }),
});
exports.updateCourseCategorySchema = zod_1.z.object({
    params: zod_1.z.object({
        categoryId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        name: zod_1.z.string().min(2, "Name must be at least 2 characters").optional(),
        iconUrl: zod_1.z.string().url("Icon URL must be a valid URL").optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty. Please provide at least one field to update.",
    }),
});
exports.deleteCourseCategorySchema = zod_1.z.object({
    params: zod_1.z.object({
        categoryId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=courseCategory.zod.js.map