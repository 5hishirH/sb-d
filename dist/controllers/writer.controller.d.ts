export declare const createWriter: import("express").RequestHandler<{}, {}, [{
    name: string;
}, ...{
    name: string;
}[]], {}, Record<string, any>>;
export declare const createManyWriters: import("express").RequestHandler<{}, {}, any, unknown, Record<string, any>>;
export declare const getAllWriters: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, {}, any, unknown, Record<string, any>>;
export declare const getWriterById: import("express").RequestHandler<{
    writerId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateWriterById: import("express").RequestHandler<{
    writerId: string;
}, {}, {
    name?: string | undefined;
}, {}, Record<string, any>>;
export declare const deleteWriterById: import("express").RequestHandler<{
    writerId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=writer.controller.d.ts.map