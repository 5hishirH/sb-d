"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMaterialSchema = exports.updateMaterialSchema = exports.createManyMaterialsSchema = exports.materialInputBaseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schema_1 = require("../schemas/common.schema");
const courseModule_model_1 = __importDefault(require("../models/courseModule.model"));
const course_model_1 = __importDefault(require("../models/course.model"));
exports.materialInputBaseSchema = zod_1.default.object({
    title: zod_1.default.string({ required_error: "Title is required" }),
    description: zod_1.default.string().optional(),
    url: zod_1.default.string({ required_error: "URL is required" }).url(),
    order: zod_1.default.number({ required_error: "Order is required" }),
    isAccessedByDefault: zod_1.default.boolean().default(false),
});
const moduleMaterialInputSchema = exports.materialInputBaseSchema.extend({
    materialType: zod_1.default.literal("ModuleMaterial"),
    module: common_schema_1.objectIdSchema,
});
const finalMaterialInputSchema = exports.materialInputBaseSchema.extend({
    materialType: zod_1.default.literal("FinalMaterial"),
    course: common_schema_1.objectIdSchema,
});
const materialInputSchema = zod_1.default.discriminatedUnion("materialType", [
    moduleMaterialInputSchema,
    finalMaterialInputSchema,
]);
exports.createManyMaterialsSchema = zod_1.default.object({
    body: zod_1.default
        .array(materialInputSchema)
        .nonempty("Request body must be a non-empty array of materials.")
        .refine(async (materials) => {
        const moduleIds = [
            ...new Set(materials
                .filter((m) => m.materialType === "ModuleMaterial")
                .map((m) => m.module)),
        ];
        const courseIds = [
            ...new Set(materials
                .filter((m) => m.materialType === "FinalMaterial")
                .map((m) => m.course)),
        ];
        const [modulesExist, coursesExist] = await Promise.all([
            moduleIds.length > 0
                ? courseModule_model_1.default.countDocuments({ _id: { $in: moduleIds } }).then((count) => count === moduleIds.length)
                : true,
            courseIds.length > 0
                ? course_model_1.default.countDocuments({ _id: { $in: courseIds } }).then((count) => count === courseIds.length)
                : true,
        ]);
        return modulesExist && coursesExist;
    }, {
        message: "One or more provided module or course IDs do not exist.",
    }),
});
exports.updateMaterialSchema = zod_1.default.object({
    params: zod_1.default.object({
        materialId: common_schema_1.objectIdSchema,
    }),
    body: zod_1.default.object({
        title: zod_1.default.string().optional(),
        description: zod_1.default.string().optional(),
        url: zod_1.default.string().url().optional(),
        isAccessedByDefault: zod_1.default.boolean().optional(),
    }),
});
exports.deleteMaterialSchema = zod_1.default.object({
    params: zod_1.default.object({
        materialId: common_schema_1.objectIdSchema,
    }),
});
//# sourceMappingURL=material.zod.js.map