import { z } from "zod";
import { Types } from "mongoose";
export declare const materialInputBaseSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    url: string;
    description?: string | undefined;
}, {
    title: string;
    order: number;
    url: string;
    description?: string | undefined;
}>;
export declare const getMaterialParams: z.ZodObject<{
    params: z.ZodObject<{
        materialId: z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        materialId: Types.ObjectId;
    }, {
        materialId: Types.ObjectId;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        materialId: Types.ObjectId;
    };
}, {
    params: {
        materialId: Types.ObjectId;
    };
}>;
export declare const createModuleMaterialSchema: z.ZodObject<{
    params: z.ZodObject<{
        moduleId: z.ZodEffects<z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>, Types.ObjectId, Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        moduleId: Types.ObjectId;
    }, {
        moduleId: Types.ObjectId;
    }>;
} & {
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    }, {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        moduleId: Types.ObjectId;
    };
    body: {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    };
}, {
    params: {
        moduleId: Types.ObjectId;
    };
    body: {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    };
}>;
export declare const createFinalMaterialSchema: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        courseId: Types.ObjectId;
    }, {
        courseId: Types.ObjectId;
    }>;
} & {
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    }, {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: Types.ObjectId;
    };
    body: {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    };
}, {
    params: {
        courseId: Types.ObjectId;
    };
    body: {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
    };
}>;
export declare const updateMaterialSchema: z.ZodEffects<z.ZodObject<{
    params: z.ZodObject<{
        materialId: z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        materialId: Types.ObjectId;
    }, {
        materialId: Types.ObjectId;
    }>;
} & {
    body: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        isAccessedByDefault: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
        url?: string | undefined;
    }, {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
        url?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        materialId: Types.ObjectId;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
        url?: string | undefined;
    };
}, {
    params: {
        materialId: Types.ObjectId;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
        url?: string | undefined;
    };
}>, {
    params: {
        materialId: Types.ObjectId;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
        url?: string | undefined;
    };
}, {
    params: {
        materialId: Types.ObjectId;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
        url?: string | undefined;
    };
}>;
export declare const reorderFinalMaterialSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    params: z.ZodObject<{
        [x: string]: z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        [x: string]: Types.ObjectId;
    }, {
        [x: string]: Types.ObjectId;
    }>;
    body: z.ZodObject<{
        orderedIds: z.ZodArray<z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    }, {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}>, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}>, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}>;
export declare const reorderModuleMaterialSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    params: z.ZodObject<{
        [x: string]: z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        [x: string]: Types.ObjectId;
    }, {
        [x: string]: Types.ObjectId;
    }>;
    body: z.ZodObject<{
        orderedIds: z.ZodArray<z.ZodEffects<z.ZodType<Types.ObjectId, z.ZodTypeDef, Types.ObjectId>, Types.ObjectId, Types.ObjectId>, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    }, {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}>, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}>, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: Types.ObjectId;
    };
    body: {
        orderedIds: [Types.ObjectId, ...Types.ObjectId[]];
    };
}>;
export type GetMaterialParams = z.infer<typeof getMaterialParams>["params"];
export type CreateMaterialInputs = z.infer<typeof createModuleMaterialSchema>["body"];
export type ReorderFinalMaterialsInputs = z.infer<typeof reorderFinalMaterialSchema>["body"];
export type ReorderModuleMaterialsInputs = z.infer<typeof reorderModuleMaterialSchema>["body"];
//# sourceMappingURL=material.validation.d.ts.map