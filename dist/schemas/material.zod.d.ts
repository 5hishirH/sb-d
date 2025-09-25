import z from "zod";
export declare const materialInputBaseSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    isAccessedByDefault: boolean;
    url: string;
    description?: string | undefined;
}, {
    title: string;
    order: number;
    url: string;
    description?: string | undefined;
    isAccessedByDefault?: boolean | undefined;
}>;
export declare const createManyMaterialsSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodArray<z.ZodDiscriminatedUnion<"materialType", [z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    } & {
        materialType: z.ZodLiteral<"ModuleMaterial">;
        module: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
    }, {
        title: string;
        order: number;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }>, z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    } & {
        materialType: z.ZodLiteral<"FinalMaterial">;
        course: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
    }, {
        title: string;
        order: number;
        course: string;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }>]>, "atleastone">, [{
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
    }, ...({
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
    })[]], [{
        title: string;
        order: number;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }, ...({
        title: string;
        order: number;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    })[]]>;
}, "strip", z.ZodTypeAny, {
    body: [{
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
    }, ...({
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
    })[]];
}, {
    body: [{
        title: string;
        order: number;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }, ...({
        title: string;
        order: number;
        module: string;
        url: string;
        materialType: "ModuleMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    })[]];
}>;
export declare const updateMaterialSchema: z.ZodObject<{
    params: z.ZodObject<{
        materialId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        materialId: string;
    }, {
        materialId: string;
    }>;
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
        materialId: string;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
        url?: string | undefined;
    };
}, {
    params: {
        materialId: string;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
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
export type CreateManyMaterialsBody = z.infer<typeof createManyMaterialsSchema>["body"];
export type GetMaterialParams = z.infer<typeof updateMaterialSchema>["params"];
export type UpdateMaterialBody = z.infer<typeof updateMaterialSchema>["body"];
//# sourceMappingURL=material.zod.d.ts.map