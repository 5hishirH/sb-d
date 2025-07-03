export declare const createModuleWithoutContent: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const updateModule: import("express").RequestHandler<{
    moduleId: string;
}, {}, {
    order?: number | undefined;
    title?: string | undefined;
}, {}, Record<string, any>>;
export declare const deleteModuleAndContents: import("express").RequestHandler<{
    moduleId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=courseModule.controller.d.ts.map