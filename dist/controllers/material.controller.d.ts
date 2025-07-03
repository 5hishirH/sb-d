export declare const createManyMaterials: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getMaterialById: import("express").RequestHandler<{
    materialId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateMaterialById: import("express").RequestHandler<{
    materialId: string;
}, {}, {
    description?: string | undefined;
    order?: number | undefined;
    title?: string | undefined;
    url?: string | undefined;
}, {}, Record<string, any>>;
export declare const deleteMaterialById: import("express").RequestHandler<{
    materialId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=material.controller.d.ts.map