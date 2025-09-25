import { z } from "zod";
export declare const getCourseParams: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodEffects<z.ZodType<import("mongoose").Types.ObjectId, z.ZodTypeDef, import("mongoose").Types.ObjectId>, import("mongoose").Types.ObjectId, import("mongoose").Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        courseId: import("mongoose").Types.ObjectId;
    }, {
        courseId: import("mongoose").Types.ObjectId;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: import("mongoose").Types.ObjectId;
    };
}, {
    params: {
        courseId: import("mongoose").Types.ObjectId;
    };
}>;
export type GetCourseParams = z.infer<typeof getCourseParams>["params"];
//# sourceMappingURL=course.validation.d.ts.map