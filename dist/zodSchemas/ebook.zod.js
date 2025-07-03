"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEbookSchema = exports.getEbookFileSchema = exports.getEbookSchema = exports.getAllEbooksSchema = exports.createEbookSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
const writer_model_1 = __importDefault(require("../models/writer.model"));
exports.createEbookSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        thumbnailUrl: zod_1.z
            .string({ required_error: "Thumbnail URL is required" })
            .url(),
        googleDriveFileId: zod_1.z.string({
            required_error: "Google Drive File ID is required",
        }),
        fileType: zod_1.z.enum(["pdf", "epub"]).optional().default("pdf"),
        overview: zod_1.z.string().optional(),
        summary: zod_1.z.string().optional(),
        language: zod_1.z.string({ required_error: "Language is required" }),
        price: zod_1.z.number({ required_error: "Price is required" }).min(0),
        rating: zod_1.z.number().min(0).max(5).optional(),
        writers: zod_1.z
            .array(zod_2.objectIdSchema)
            .nonempty("At least one writer is required."),
    })
        .refine(async (data) => {
        const uniqueWriterIds = [...new Set(data.writers)];
        const foundWritersCount = await writer_model_1.default.countDocuments({
            _id: { $in: uniqueWriterIds },
        });
        return foundWritersCount === uniqueWriterIds.length;
    }, {
        message: "One or more writers not found",
        path: ["writers"],
    }),
});
exports.getAllEbooksSchema = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.string().default("1"),
        limit: zod_1.z.string().default("10"),
    }),
});
exports.getEbookSchema = zod_1.z.object({
    params: zod_1.z.object({
        ebookId: zod_2.objectIdSchema,
    }),
});
exports.getEbookFileSchema = zod_1.z.object({
    params: zod_1.z.object({
        ebookId: zod_2.objectIdSchema,
    }),
});
exports.updateEbookSchema = zod_1.z.object({
    params: zod_1.z.object({
        ebookId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        name: zod_1.z.string().optional(),
        thumbnailUrl: zod_1.z.string().url().optional(),
        googleDriveFileId: zod_1.z.string().optional(),
        fileType: zod_1.z.enum(["pdf", "epub"]).optional(),
        overview: zod_1.z.string().optional(),
        summary: zod_1.z.string().optional(),
        language: zod_1.z.string().optional(),
        price: zod_1.z.number().min(0).optional(),
        rating: zod_1.z.number().min(0).max(5).optional(),
        writers: zod_1.z
            .array(zod_2.objectIdSchema)
            .nonempty("At least one writer is required.")
            .optional(),
        publication: zod_2.objectIdSchema.optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    })
        .refine(async (data) => {
        if (!data.writers)
            return true;
        const uniqueWriterIds = [...new Set(data.writers)];
        const foundWritersCount = await writer_model_1.default.countDocuments({
            _id: { $in: uniqueWriterIds },
        });
        return foundWritersCount === uniqueWriterIds.length;
    }, { message: "One or more writers not found", path: ["writers"] }),
});
//# sourceMappingURL=ebook.zod.js.map