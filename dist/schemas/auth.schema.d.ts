import { z } from "zod";
export declare const registerUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        dateOfBirth: z.ZodOptional<z.ZodDate>;
        institution: z.ZodOptional<z.ZodString>;
        occupation: z.ZodOptional<z.ZodString>;
        year: z.ZodOptional<z.ZodNumber>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    }, {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    };
}, {
    body: {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    };
}>;
export declare const loginUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        password: string;
    };
}, {
    body: {
        email: string;
        password: string;
    };
}>;
export declare const sendVerificationEmailSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
    }, {
        email: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
    };
}, {
    body: {
        email: string;
    };
}>;
export declare const verifyEmailSchema: z.ZodObject<{
    params: z.ZodObject<{
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
    }, {
        token: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        token: string;
    };
}, {
    params: {
        token: string;
    };
}>;
export declare const getUserSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        id: string;
    };
}, {
    params: {
        id: string;
    };
}>;
export declare const forgotPasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
    }, {
        email: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
    };
}, {
    body: {
        email: string;
    };
}>;
export declare const resetPasswordSchema: z.ZodObject<{
    params: z.ZodObject<{
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
    }, {
        token: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        password: z.ZodString;
        passwordConfirmation: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        password: string;
        passwordConfirmation: string;
    }, {
        password: string;
        passwordConfirmation: string;
    }>, {
        password: string;
        passwordConfirmation: string;
    }, {
        password: string;
        passwordConfirmation: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        token: string;
    };
    body: {
        password: string;
        passwordConfirmation: string;
    };
}, {
    params: {
        token: string;
    };
    body: {
        password: string;
        passwordConfirmation: string;
    };
}>;
export declare const updateUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        phone: z.ZodOptional<z.ZodString>;
        dateOfBirth: z.ZodOptional<z.ZodDate>;
        institution: z.ZodOptional<z.ZodString>;
        occupation: z.ZodOptional<z.ZodString>;
        year: z.ZodOptional<z.ZodNumber>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    }, {
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    };
}, {
    body: {
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    };
}>;
export declare const updatePasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        currentPassword: z.ZodString;
        newPassword: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        currentPassword: string;
        newPassword: string;
    }, {
        currentPassword: string;
        newPassword: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        currentPassword: string;
        newPassword: string;
    };
}, {
    body: {
        currentPassword: string;
        newPassword: string;
    };
}>;
export declare const queryUsersSchema: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
        limit: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
        search: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodEnum<["user", "admin"]>>;
        sortBy: z.ZodDefault<z.ZodOptional<z.ZodEnum<["name", "email", "createdAt"]>>>;
        sortOrder: z.ZodDefault<z.ZodOptional<z.ZodEnum<["asc", "desc"]>>>;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        page: number;
        sortBy: "name" | "email" | "createdAt";
        sortOrder: "asc" | "desc";
        search?: string | undefined;
        role?: "user" | "admin" | undefined;
    }, {
        search?: string | undefined;
        limit?: string | undefined;
        page?: string | undefined;
        role?: "user" | "admin" | undefined;
        sortBy?: "name" | "email" | "createdAt" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        limit: number;
        page: number;
        sortBy: "name" | "email" | "createdAt";
        sortOrder: "asc" | "desc";
        search?: string | undefined;
        role?: "user" | "admin" | undefined;
    };
}, {
    query: {
        search?: string | undefined;
        limit?: string | undefined;
        page?: string | undefined;
        role?: "user" | "admin" | undefined;
        sortBy?: "name" | "email" | "createdAt" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
    };
}>;
export type CreateUserInput = z.infer<typeof registerUserSchema>["body"];
export type LoginUserInput = z.infer<typeof loginUserSchema>["body"];
export type SendVerificationEmailInput = z.infer<typeof sendVerificationEmailSchema>["body"];
export type UpdateUserInfoInput = z.infer<typeof updateUserSchema>["body"];
export type UpdatePasswordInput = z.infer<typeof updatePasswordSchema>["body"];
export type ForgetPasswordInput = z.infer<typeof forgotPasswordSchema>["body"];
export type ResetPasswordParams = z.infer<typeof resetPasswordSchema>["params"];
export type ResetPasswordBody = z.infer<typeof resetPasswordSchema>["body"];
export type GetUserParams = z.infer<typeof getUserSchema>["params"];
export type QueryUsersInput = z.infer<typeof queryUsersSchema>["query"];
//# sourceMappingURL=auth.schema.d.ts.map