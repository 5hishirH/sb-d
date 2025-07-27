"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssignmentSchema = exports.updateAssignmentSchema = exports.getAssignmentSchema = exports.createManyAssignmentsSchema = void 0;
const zod_1 = require("zod");
const common_schema_1 = require("../schemas/common.schema");
const courseModule_model_1 = __importDefault(require("../models/courseModule.model"));
const singleAssignmentSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    description: zod_1.z.string().optional(),
    duration: zod_1.z.number({ required_error: "Duration is required" }),
    maxPoints: zod_1.z.number({ required_error: "Max points are required" }),
    order: zod_1.z.number({ required_error: "Order is required" }),
    module: common_schema_1.objectIdSchema,
});
exports.createManyAssignmentsSchema = zod_1.z.object({
    body: zod_1.z
        .array(singleAssignmentSchema)
        .nonempty("Request body must be a non-empty array of assignments.")
        .refine(async (assignments) => {
        const moduleIds = [...new Set(assignments.map((a) => a.module))];
        const foundModulesCount = await courseModule_model_1.default.countDocuments({
            _id: { $in: moduleIds },
        });
        return foundModulesCount === moduleIds.length;
    }, {
        message: "One or more provided module IDs do not exist.",
    }),
});
exports.getAssignmentSchema = zod_1.z.object({
    params: zod_1.z.object({
        assignmentId: common_schema_1.objectIdSchema,
    }),
});
exports.updateAssignmentSchema = zod_1.z.object({
    params: zod_1.z.object({
        assignmentId: common_schema_1.objectIdSchema,
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
        assignmentId: common_schema_1.objectIdSchema,
    }),
});
//# sourceMappingURL=assignment.zod.js.map