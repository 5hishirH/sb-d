import { z } from "zod";
export declare const updateMaterialSchema: z.ZodObject<{
    params: z.ZodObject<{
        materialId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        materialId: string;
    }, {
        materialId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }>, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        materialId: string;
    };
    body: {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    };
}, {
    params: {
        materialId: string;
    };
    body: {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    };
}>;
export declare const deleteMaterialSchema: z.ZodObject<{
    params: z.ZodObject<{
        materialId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        materialId: string;
    }, {
        materialId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        materialId: string;
    };
}, {
    params: {
        materialId: string;
    };
}>;
//# sourceMappingURL=material.zod.d.ts.map