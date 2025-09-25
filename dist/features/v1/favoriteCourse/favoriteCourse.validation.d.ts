import { z } from "zod";
export declare const addFavoriteMarkSchema: z.ZodObject<{
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
export type AddFavoriteMark = z.infer<typeof addFavoriteMarkSchema>["params"];
//# sourceMappingURL=favoriteCourse.validation.d.ts.map