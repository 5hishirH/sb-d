export declare const createEbookCategory: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const createManyEbookCategories: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getAllEbookCategories: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getEbookCategoryById: import("express").RequestHandler<{
    categoryId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateEbookCategory: import("express").RequestHandler<{
    categoryId: string;
}, {}, {
    name: string;
}, {}, Record<string, any>>;
export declare const deleteEbookCategory: import("express").RequestHandler<{
    categoryId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=ebookCategory.controller.d.ts.map