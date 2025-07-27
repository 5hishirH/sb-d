"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEbookCategorySchema = exports.updateEbookCategorySchema = exports.getEbookCategorySchema = exports.createManyEbookCategorySchema = exports.createEbookCategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schema_1 = require("../schemas/common.schema");
const ebookCategorySchema = zod_1.default.object({
    name: zod_1.default
        .string({ required_error: "Category of book is required" })
        .min(2, "Name must be of 2 characters minimum"),
});
exports.createEbookCategorySchema = zod_1.default.object({
    body: ebookCategorySchema,
});
exports.createManyEbookCategorySchema = zod_1.default.object({
    body: zod_1.default
        .array(ebookCategorySchema)
        .refine((data) => Object.keys(data).length > 0, {
        message: "Request body cannot be empty. Please provide at least one category to create.",
    }),
});
exports.getEbookCategorySchema = zod_1.default.object({
    params: zod_1.default.object({
        categoryId: common_schema_1.objectIdSchema,
    }),
});
exports.updateEbookCategorySchema = zod_1.default.object({
    params: zod_1.default.object({
        categoryId: common_schema_1.objectIdSchema,
    }),
    body: zod_1.default
        .object({
        name: zod_1.default.string().min(2, "Name must be at least 2 characters"),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
exports.deleteEbookCategorySchema = zod_1.default.object({
    params: zod_1.default.object({
        categoryId: common_schema_1.objectIdSchema,
    }),
});
//# sourceMappingURL=ebookCategory.zod.js.map