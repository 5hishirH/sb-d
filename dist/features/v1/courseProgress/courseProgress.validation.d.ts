import z from "zod";
export declare const completeVideoSchema: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodString;
        videoId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        courseId: string;
        videoId: string;
    }, {
        courseId: string;
        videoId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
        videoId: string;
    };
}, {
    params: {
        courseId: string;
        videoId: string;
    };
}>;
export declare const completeMaterialSchema: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodString;
        materialId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        courseId: string;
        materialId: string;
    }, {
        courseId: string;
        materialId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
        materialId: string;
    };
}, {
    params: {
        courseId: string;
        materialId: string;
    };
}>;
export declare const getEnrolledCoursesSchema: z.ZodObject<{
    query: z.ZodObject<{
        filter: z.ZodOptional<z.ZodEnum<["completed"]>>;
    }, "strip", z.ZodTypeAny, {
        filter?: "completed" | undefined;
    }, {
        filter?: "completed" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        filter?: "completed" | undefined;
    };
}, {
    query: {
        filter?: "completed" | undefined;
    };
}>;
export type CompleteVideoParams = z.infer<typeof completeVideoSchema>["params"];
export type CompleteMaterialParams = z.infer<typeof completeMaterialSchema>["params"];
export type GetEnrolledCourseQueries = z.infer<typeof getEnrolledCoursesSchema>["query"];
//# sourceMappingURL=courseProgress.validation.d.ts.map