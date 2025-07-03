import { z } from "zod";
export declare const createManyVideosSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
        module: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }, {
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }>, "atleastone">, [{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }, ...{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }[]], [{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }, ...{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }[]]>;
}, "strip", z.ZodTypeAny, {
    body: [{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }, ...{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }[]];
}, {
    body: [{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }, ...{
        order: number;
        url: string;
        module: string;
        description?: string | undefined;
        title?: string | undefined;
    }[]];
}>;
export declare const updateCourseVideoSchema: z.ZodObject<{
    params: z.ZodObject<{
        videoId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        videoId: string;
    }, {
        videoId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }>, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }, {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        videoId: string;
    };
    body: {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    };
}, {
    params: {
        videoId: string;
    };
    body: {
        description?: string | undefined;
        order?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    };
}>;
export declare const deleteCourseVideoSchema: z.ZodObject<{
    params: z.ZodObject<{
        videoId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        videoId: string;
    }, {
        videoId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        videoId: string;
    };
}, {
    params: {
        videoId: string;
    };
}>;
export type GetVideoParams = z.infer<typeof updateCourseVideoSchema>["params"];
export type UpdateVideoBody = z.infer<typeof updateCourseVideoSchema>["body"];
//# sourceMappingURL=courseVideo.zod.d.ts.map