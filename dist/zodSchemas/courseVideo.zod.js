"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseVideoSchema = exports.updateCourseVideoSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
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