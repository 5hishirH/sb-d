"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryUsersSchema = exports.getUserSchema = exports.updateUserSchema = exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.verifyEmailSchema = exports.sendVerificationEmailSchema = exports.loginUserSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(2, "Name must be at least 2 characters")
            .max(50, "Name must be less than 50 characters"),
        email: zod_1.z.string().email("Invalid email format").toLowerCase(),
        password: zod_1.z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(100, "Password must be less than 100 characters"),
    }),
});
exports.loginUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email("Invalid email format").toLowerCase(),
        password: zod_1.z.string().min(1, "Password is required"),
    }),
});
exports.sendVerificationEmailSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email("Invalid email address"),
    }),
});
exports.verifyEmailSchema = zod_1.z.object({
    params: zod_1.z.object({
        token: zod_1.z.string().nonempty("Token is required in the URL"),
    }),
});
exports.forgotPasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email("Invalid email address"),
    }),
});
exports.resetPasswordSchema = zod_1.z.object({
    params: zod_1.z.object({
        token: zod_1.z.string().nonempty("Token is required in the URL"),
    }),
    body: zod_1.z
        .object({
        password: zod_1.z
            .string()
            .min(6, "Password must be at least 6 characters long"),
        passwordConfirmation: zod_1.z.string({
            required_error: "Password confirmation is required",
        }),
    })
        .refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    }),
});
exports.updateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(2, "Name must be at least 2 characters")
            .max(50, "Name must be less than 50 characters")
            .optional(),
        email: zod_1.z.string().email("Invalid email format").toLowerCase().optional(),
        role: zod_1.z.enum(["user", "admin"]).optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid user ID format"),
    }),
});
exports.getUserSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid user ID format"),
    }),
});
exports.queryUsersSchema = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.string().regex(/^\d+$/).transform(Number).optional().default("1"),
        limit: zod_1.z.string().regex(/^\d+$/).transform(Number).optional().default("10"),
        search: zod_1.z.string().optional(),
        role: zod_1.z.enum(["user", "admin"]).optional(),
        sortBy: zod_1.z
            .enum(["name", "email", "createdAt"])
            .optional()
            .default("createdAt"),
        sortOrder: zod_1.z.enum(["asc", "desc"]).optional().default("desc"),
    }),
});
//# sourceMappingURL=auth.zod.js.map