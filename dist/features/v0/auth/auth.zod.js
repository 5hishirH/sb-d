"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const zod_1 = require("zod");
const auth_schema_1 = require("../../../schemas/auth.schema");
exports.registerUserSchema = auth_schema_1.registerUserSchema.extend({
    body: auth_schema_1.registerUserSchema.shape.body.extend({
        phone: zod_1.z
            .string()
            .regex(/^(?:\+?88)?01[3-9]\d{8}$/, "Invalid phone number")
            .optional(),
        dateOfBirth: zod_1.z.coerce
            .date({
            invalid_type_error: "Invalid date format",
        })
            .optional(),
        institution: zod_1.z
            .string()
            .min(3, "Address must be at least 3 characters")
            .optional(),
        occupation: zod_1.z
            .string()
            .min(3, "Address must be at least 3 characters")
            .optional(),
        year: zod_1.z.number().min(0).optional(),
        address: zod_1.z
            .string()
            .min(3, "Address must be at least 3 characters")
            .optional(),
    }),
});
//# sourceMappingURL=auth.zod.js.map