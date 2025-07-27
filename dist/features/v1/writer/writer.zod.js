"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWriterSchema = exports.updateWriterSchema = exports.getWriterSchema = exports.createManyWritersSchema = exports.createWriterSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../../../utils/zod");
exports.createWriterSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }).min(2),
    }),
});
const singleWriterSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name is required" }).min(2),
});
exports.createManyWritersSchema = zod_1.z.object({
    body: zod_1.z
        .array(singleWriterSchema)
        .nonempty("Request body must be a non-empty array of writers."),
});
exports.getWriterSchema = zod_1.z.object({
    params: zod_1.z.object({
        writerId: zod_2.objectIdSchema,
    }),
});
exports.updateWriterSchema = zod_1.z.object({
    params: zod_1.z.object({
        writerId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        name: zod_1.z.string().min(2).optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
exports.deleteWriterSchema = zod_1.z.object({
    params: zod_1.z.object({
        writerId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=writer.zod.js.map