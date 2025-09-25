import mongoose from "mongoose";
export declare const createManyMaterials: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const createModuleMaterial: import("express").RequestHandler<{
    moduleId: mongoose.Types.ObjectId;
}, {}, {
    title: string;
    order: number;
    url: string;
    description?: string | undefined;
}, {}, Record<string, any>>;
export declare const createFinalMaterial: import("express").RequestHandler<{
    courseId: mongoose.Types.ObjectId;
}, {}, {
    title: string;
    order: number;
    url: string;
    description?: string | undefined;
}, {}, Record<string, any>>;
export declare const getMaterialById: import("express").RequestHandler<{
    materialId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateMaterialById: import("express").RequestHandler<{
    materialId: string;
}, {}, {
    description?: string | undefined;
    title?: string | undefined;
    isAccessedByDefault?: boolean | undefined;
    url?: string | undefined;
}, {}, Record<string, any>>;
export declare const reorderFinalMaterials: import("express").RequestHandler<{
    courseId: mongoose.Types.ObjectId;
}, {}, {
    orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
}, {}, Record<string, any>>;
export declare const reorderModuleMaterials: import("express").RequestHandler<{
    moduleId: mongoose.Types.ObjectId;
}, {}, {
    orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
}, {}, Record<string, any>>;
export declare const deleteMaterialById: import("express").RequestHandler<{
    materialId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=material.controller.d.ts.map