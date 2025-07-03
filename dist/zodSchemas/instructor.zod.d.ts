import { z } from "zod";
export declare const createInstructorSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        avatarUrl: z.ZodString;
        tags: z.ZodArray<z.ZodString, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }, {
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    };
}, {
    body: {
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    };
}>;
export declare const createManyInstructorSchema: z.ZodObject<{
    body: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        avatarUrl: z.ZodString;
        tags: z.ZodArray<z.ZodString, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }, {
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    body: [{
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }, ...{
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }[]];
}, {
    body: [{
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }, ...{
        name: string;
        description: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }[]];
}>;
export declare const getInstructorSchema: z.ZodObject<{
    params: z.ZodObject<{
        instructorId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        instructorId: string;
    }, {
        instructorId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        instructorId: string;
    };
}, {
    params: {
        instructorId: string;
    };
}>;
export declare const updateInstructorSchema: z.ZodObject<{
    params: z.ZodObject<{
        instructorId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        instructorId: string;
    }, {
        instructorId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        avatarUrl: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        description?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    }, {
        name?: string | undefined;
        description?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    }>, {
        name?: string | undefined;
        description?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    }, {
        name?: string | undefined;
        description?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        instructorId: string;
    };
    body: {
        name?: string | undefined;
        description?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    };
}, {
    params: {
        instructorId: string;
    };
    body: {
        name?: string | undefined;
        description?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    };
}>;
export declare const deleteInstructorSchema: z.ZodObject<{
    params: z.ZodObject<{
        instructorId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        instructorId: string;
    }, {
        instructorId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        instructorId: string;
    };
}, {
    params: {
        instructorId: string;
    };
}>;
export type GetInstructorParams = z.infer<typeof getInstructorSchema>["params"];
//# sourceMappingURL=instructor.zod.d.ts.map