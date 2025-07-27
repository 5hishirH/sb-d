"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMaterialSchema = exports.updateMaterialSchema = exports.createManyMaterialsSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schema_1 = require("../schemas/common.schema");
const courseModule_model_1 = __importDefault(require("../models/courseModule.model"));
const singleMaterialSchema = zod_1.default.object({
    title: zod_1.default.string({ required_error: "Title is required" }),
    description: zod_1.default.string().optional(),
    url: zod_1.default.string({ required_error: "URL is required" }).url(),
    order: zod_1.default.number({ required_error: "Order is required" }),
    module: common_schema_1.objectIdSchema,
});
exports.createManyMaterialsSchema = zod_1.default.object({
    body: zod_1.default
        .array(singleMaterialSchema)
        .nonempty("Request body must be a non-empty array of materials.")
        .refine(async (materials) => {
        const moduleIds = [...new Set(materials.map((m) => m.module))];
        const foundModulesCount = await courseModule_model_1.default.countDocuments({
            _id: { $in: moduleIds },
        });
        return foundModulesCount === moduleIds.length;
    }, {
        message: "One or more provided module IDs do not exist.",
    }),
});
exports.updateMaterialSchema = zod_1.default.object({
    params: zod_1.default.object({
        materialId: common_schema_1.objectIdSchema,
    }),
    body: zod_1.default
        .object({
        title: zod_1.default.string().optional(),
        description: zod_1.default.string().optional(),
        url: zod_1.default.string().url().optional(),
        order: zod_1.default.number().optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
exports.deleteMaterialSchema = zod_1.default.object({
    params: zod_1.default.object({
        materialId: common_schema_1.objectIdSchema,
    }),
});
//# sourceMappingURL=material.zod.js.map