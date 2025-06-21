"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssignmentSchema = exports.updateAssignmentSchema = exports.getAssignmentSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
exports.getAssignmentSchema = zod_1.z.object({
    params: zod_1.z.object({
        assignmentId: zod_2.objectIdSchema,
    }),
});
exports.updateAssignmentSchema = zod_1.z.object({
    params: zod_1.z.object({
        assignmentId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        duration: zod_1.z.number().optional(),
        order: zod_1.z.number().optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
exports.deleteAssignmentSchema = zod_1.z.object({
    params: zod_1.z.object({
        assignmentId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=assignment.zod.js.map