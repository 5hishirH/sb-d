"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseVideoSchema = exports.updateCourseVideoSchema = exports.createManyVideosSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
const courseModule_model_1 = __importDefault(require("../models/courseModule.model"));
const singleVideoSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    url: zod_1.z.string({ required_error: "URL is required" }).url(),
    order: zod_1.z.number({ required_error: "Order is required" }),
    module: zod_2.objectIdSchema,
});
exports.createManyVideosSchema = zod_1.z.object({
    body: zod_1.z
        .array(singleVideoSchema)
        .nonempty("Request body must be a non-empty array of videos.")
        .refine(async (videos) => {
        const moduleIds = [...new Set(videos.map((m) => m.module))];
        const foundModulesCount = await courseModule_model_1.default.countDocuments({
            _id: { $in: moduleIds },
        });
        return foundModulesCount === moduleIds.length;
    }, {
        message: "One or more provided module IDs do not exist.",
    }),
});
exports.updateCourseVideoSchema = zod_1.z.object({
    params: zod_1.z.object({
        videoId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        url: zod_1.z.string().url().optional(),
        order: zod_1.z.number().optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
exports.deleteCourseVideoSchema = zod_1.z.object({
    params: zod_1.z.object({
        videoId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=courseVideo.zod.js.map