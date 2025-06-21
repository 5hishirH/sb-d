"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInstructorSchema = exports.updateInstructorSchema = exports.getInstructorSchema = exports.createInstructorSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
exports.createInstructorSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: "Name is required" })
            .min(2, "Name must be at least 2 characters"),
        description: zod_1.z
            .string({ required_error: "Description is required" })
            .min(10, "Description must be at least 10 characters"),
        avatarUrl: zod_1.z
            .string({ required_error: "Avatar image url is required" })
            .url("Avatar URL must be a valid URL"),
        tags: zod_1.z.array(zod_1.z.string()).nonempty("Atleast one tag is required"),
    }),
});
exports.getInstructorSchema = zod_1.z.object({
    params: zod_1.z.object({
        instructorId: zod_2.objectIdSchema,
    }),
});
exports.updateInstructorSchema = zod_1.z.object({
    params: zod_1.z.object({
        instructorId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        name: zod_1.z.string().min(2, "Name must be at least 2 characters").optional(),
        description: zod_1.z.string().optional(),
        avatarUrl: zod_1.z.string().url("Avatar URL must be a valid URL").optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
    })
        .passthrough(),
});
exports.deleteInstructorSchema = zod_1.z.object({
    params: zod_1.z.object({
        instructorId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=instructor.zod.js.map