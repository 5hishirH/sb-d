import { z } from "zod";
export declare const createInstructorSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        avatarUrl: z.ZodString;
        tags: z.ZodArray<z.ZodString, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }, {
        description: string;
        name: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        description: string;
        name: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    };
}, {
    body: {
        description: string;
        name: string;
        avatarUrl: string;
        tags: [string, ...string[]];
    };
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
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        avatarUrl: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        avatarUrl: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        avatarUrl: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
}, "strip", z.ZodTypeAny, {
    params: {
        instructorId: string;
    };
    body: {
        description?: string | undefined;
        name?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    } & {
        [k: string]: unknown;
    };
}, {
    params: {
        instructorId: string;
    };
    body: {
        description?: string | undefined;
        name?: string | undefined;
        avatarUrl?: string | undefined;
        tags?: string[] | undefined;
    } & {
        [k: string]: unknown;
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
//# sourceMappingURL=instructor.zod.d.ts.map