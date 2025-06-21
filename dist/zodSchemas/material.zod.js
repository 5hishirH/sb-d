"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMaterialSchema = exports.updateMaterialSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
exports.updateMaterialSchema = zod_1.z.object({
    params: zod_1.z.object({
        materialId: zod_2.objectIdSchema,
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
exports.deleteMaterialSchema = zod_1.z.object({
    params: zod_1.z.object({
        materialId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=material.zod.js.map