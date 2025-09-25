import z from "zod";
export declare const getCourseParams: z.ZodObject<{
    params: z.ZodEffects<z.ZodObject<{
        courseId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        courseId: string;
    }, {
        courseId: string;
    }>, {
        courseId: string;
    }, {
        courseId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
    };
}, {
    params: {
        courseId: string;
    };
}>;
export declare const createFinalMaterialsSchema: z.ZodObject<{
    params: z.ZodEffects<z.ZodObject<{
        courseId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        courseId: string;
    }, {
        courseId: string;
    }>, {
        courseId: string;
    }, {
        courseId: string;
    }>;
} & {
    body: z.ZodArray<z.ZodObject<Omit<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    }, "order">, "strip", z.ZodTypeAny, {
        title: string;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
    }, {
        title: string;
        url: string;
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
    };
    body: [{
        title: string;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
    }, ...{
        title: string;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
    }[]];
}, {
    params: {
        courseId: string;
    };
    body: [{
        title: string;
        url: string;
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }, ...{
        title: string;
        url: string;
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }[]];
}>;
export type GetCourseParams = z.infer<typeof getCourseParams>["params"];
export type CreateFinalMaterialsInput = z.infer<typeof createFinalMaterialsSchema>["body"];
//# sourceMappingURL=course.schema.d.ts.map