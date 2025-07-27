export declare const createCourseCategory: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const createManyCategories: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getAllCourseCategories: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getCourseCategoryById: import("express").RequestHandler<{
    categoryId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateCourseCategoryById: import("express").RequestHandler<{
    categoryId: string;
}, {}, {
    name?: string | undefined;
    iconUrl?: string | undefined;
}, {}, Record<string, any>>;
export declare const deleteCourseCategoryById: import("express").RequestHandler<{
    categoryId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=courseCategory.controller.d.ts.map