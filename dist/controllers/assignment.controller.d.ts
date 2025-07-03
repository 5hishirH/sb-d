export declare const createManyAssignments: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getAllAssignments: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getAssignmentById: import("express").RequestHandler<{
    assignmentId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateAssignmentById: import("express").RequestHandler<{
    assignmentId: string;
}, {}, {
    description?: string | undefined;
    order?: number | undefined;
    title?: string | undefined;
    duration?: number | undefined;
}, {}, Record<string, any>>;
export declare const deleteAssignmentById: import("express").RequestHandler<{
    assignmentId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=assignment.controller.d.ts.map