"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactSubmissionSchema = void 0;
const zod_1 = require("zod");
exports.createContactSubmissionSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string().optional(),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email("Invalid email address"),
        message: zod_1.z
            .string({ required_error: "Message is required" })
            .min(10, "Message must be at least 10 characters long"),
    }),
});
//# sourceMappingURL=contactSubmission.zod.js.map