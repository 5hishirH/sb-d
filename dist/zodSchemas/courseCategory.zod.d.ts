import { z } from "zod";
export declare const createCourseCategorySchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        iconUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        iconUrl: string;
    }, {
        name: string;
        iconUrl: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        iconUrl: string;
    };
}, {
    body: {
        name: string;
        iconUrl: string;
    };
}>;
export declare const getCourseCategorySchema: z.ZodObject<{
    params: z.ZodObject<{
        categoryId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        categoryId: string;
    }, {
        categoryId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        categoryId: string;
    };
}, {
    params: {
        categoryId: string;
    };
}>;
export declare const updateCourseCategorySchema: z.ZodObject<{
    params: z.ZodObject<{
        categoryId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        categoryId: string;
    }, {
        categoryId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        iconUrl: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
        iconUrl: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
        iconUrl: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
        iconUrl: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
        iconUrl: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
}, "strip", z.ZodTypeAny, {
    params: {
        categoryId: string;
    };
    body: {
        name?: string | undefined;
        iconUrl?: string | undefined;
    } & {
        [k: string]: unknown;
    };
}, {
    params: {
        categoryId: string;
    };
    body: {
        name?: string | undefined;
        iconUrl?: string | undefined;
    } & {
        [k: string]: unknown;
    };
}>;
export declare const deleteCourseCategorySchema: z.ZodObject<{
    params: z.ZodObject<{
        categoryId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        categoryId: string;
    }, {
        categoryId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        categoryId: string;
    };
}, {
    params: {
        categoryId: string;
    };
}>;
//# sourceMappingURL=courseCategory.zod.d.ts.map