import { z } from 'zod';
export declare const createUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        role: z.ZodDefault<z.ZodOptional<z.ZodEnum<["user", "admin"]>>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string;
        password: string;
        role: "user" | "admin";
    }, {
        name: string;
        email: string;
        password: string;
        role?: "user" | "admin" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        email: string;
        password: string;
        role: "user" | "admin";
    };
}, {
    body: {
        name: string;
        email: string;
        password: string;
        role?: "user" | "admin" | undefined;
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
export declare const updateUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodEnum<["user", "admin"]>>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        email?: string | undefined;
        role?: "user" | "admin" | undefined;
    }, {
        name?: string | undefined;
        email?: string | undefined;
        role?: "user" | "admin" | undefined;
    }>;
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
    body: {
        name?: string | undefined;
        email?: string | undefined;
        role?: "user" | "admin" | undefined;
    };
}, {
    params: {
        id: string;
    };
    body: {
        name?: string | undefined;
        email?: string | undefined;
        role?: "user" | "admin" | undefined;
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
        role?: "user" | "admin" | undefined;
        page?: string | undefined;
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
        role?: "user" | "admin" | undefined;
        page?: string | undefined;
        sortBy?: "name" | "email" | "createdAt" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
    };
}>;
export type CreateUserInput = z.infer<typeof createUserSchema>['body'];
export type LoginUserInput = z.infer<typeof loginUserSchema>['body'];
export type UpdateUserInput = z.infer<typeof updateUserSchema>['body'];
export type GetUserParams = z.infer<typeof getUserSchema>['params'];
export type QueryUsersInput = z.infer<typeof queryUsersSchema>['query'];
//# sourceMappingURL=user.zod.d.ts.map