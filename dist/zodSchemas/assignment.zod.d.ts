import { z } from "zod";
export declare const createManyAssignmentsSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        duration: z.ZodNumber;
        maxPoints: z.ZodNumber;
        order: z.ZodNumber;
        module: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }, {
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }>, "atleastone">, [{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }, ...{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }[]], [{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }, ...{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }[]]>;
}, "strip", z.ZodTypeAny, {
    body: [{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }, ...{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }[]];
}, {
    body: [{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }, ...{
        order: number;
        title: string;
        duration: number;
        module: string;
        maxPoints: number;
        description?: string | undefined;
    }[]];
}>;
export declare const getAssignmentSchema: z.ZodObject<{
    params: z.ZodObject<{
        assignmentId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        assignmentId: string;
    }, {
        assignmentId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        assignmentId: string;
    };
}, {
    params: {
        assignmentId: string;
    };
}>;
export declare const updateAssignmentSchema: z.ZodObject<{
    params: z.ZodObject<{
        assignmentId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        assignmentId: string;
    }, {
        assignmentId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        duration: z.ZodOptional<z.ZodNumber>;
        order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        duration?: number | undefined;
    }, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        duration?: number | undefined;
    }>, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        duration?: number | undefined;
    }, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        duration?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        assignmentId: string;
    };
    body: {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        duration?: number | undefined;
    };
}, {
    params: {
        assignmentId: string;
    };
    body: {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        duration?: number | undefined;
    };
}>;
export declare const deleteAssignmentSchema: z.ZodObject<{
    params: z.ZodObject<{
        assignmentId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        assignmentId: string;
    }, {
        assignmentId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        assignmentId: string;
    };
}, {
    params: {
        assignmentId: string;
    };
}>;
export type GetAssignmentParams = z.infer<typeof getAssignmentSchema>["params"];
export type UpdateAssignmentBody = z.infer<typeof updateAssignmentSchema>["body"];
//# sourceMappingURL=assignment.zod.d.ts.map