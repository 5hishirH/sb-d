"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorderModuleMaterialSchema = exports.reorderFinalMaterialSchema = exports.updateMaterialSchema = exports.createFinalMaterialSchema = exports.createModuleMaterialSchema = exports.getMaterialParams = exports.materialInputBaseSchema = void 0;
const zod_1 = require("zod");
const courseModule_validation_1 = require("../courseModule.validation");
const course_validation_1 = require("../../../../../features/v1/course/course.validation");
const common_validation_1 = require("../../../../../features/v1/common.validation");
const material_model_1 = __importDefault(require("../../../../../models/material.model"));
const generateReorderSchema_1 = require("../../../../../utils/generateReorderSchema");
exports.materialInputBaseSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    description: zod_1.z.string().optional(),
    url: zod_1.z.string({ required_error: "URL is required" }).url(),
    order: zod_1.z.number({ required_error: "Order is required" }),
});
exports.getMaterialParams = zod_1.z.object({
    params: zod_1.z.object({
        materialId: common_validation_1.objectIdSchema,
    }),
});
const checkMaterialIdFromDB = async (materialId) => {
    const materialExists = await material_model_1.default.exists({ _id: materialId });
    return !!materialExists;
};
exports.createModuleMaterialSchema = courseModule_validation_1.getModuleSchema.extend({
    body: exports.materialInputBaseSchema,
});
exports.createFinalMaterialSchema = course_validation_1.getCourseParams.extend({
    body: exports.materialInputBaseSchema,
});
exports.updateMaterialSchema = exports.getMaterialParams
    .extend({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        url: zod_1.z.string().url().optional(),
        isAccessedByDefault: zod_1.z.boolean().optional(),
    }),
})
    .refine(async ({ params: { materialId } }) => await checkMaterialIdFromDB(materialId), {
    message: "Invalid material object id",
    path: ["materialId"],
});
exports.reorderFinalMaterialSchema = (0, generateReorderSchema_1.generateReorderSchema)({
    paramName: "courseId",
    candidateModel: "Material",
    candidateFieldNameForParent: "course",
    parentModel: "Course",
});
exports.reorderModuleMaterialSchema = (0, generateReorderSchema_1.generateReorderSchema)({
    paramName: "moduleId",
    candidateModel: "Material",
    candidateFieldNameForParent: "module",
    parentModel: "Module",
});
//# sourceMappingURL=material.validation.js.map