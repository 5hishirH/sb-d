"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFinalMaterialsSchema = exports.getCourseParams = void 0;
const zod_1 = __importDefault(require("zod"));
const material_zod_1 = require("../../../schemas/material.zod");
const common_schema_1 = require("../../../schemas/common.schema");
const course_model_1 = __importDefault(require("../../../models/course.model"));
exports.getCourseParams = zod_1.default.object({
    params: zod_1.default
        .object({
        courseId: common_schema_1.objectIdSchema,
    })
        .refine(async ({ courseId }) => {
        const courseExists = await course_model_1.default.exists({ _id: courseId });
        return !!courseExists;
    }, {
        message: "Course with the requested id does not exist",
    }),
});
exports.createFinalMaterialsSchema = exports.getCourseParams.extend({
    body: zod_1.default
        .array(material_zod_1.materialInputBaseSchema.omit({ order: true }))
        .nonempty("At least one material is required"),
});
//# sourceMappingURL=course.schema.js.map