import { z } from "zod";
export declare const createFeedbackSchema: z.ZodObject<{
    body: z.ZodObject<{
        username: z.ZodOptional<z.ZodString>;
        email: z.ZodString;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        email: string;
        username?: string | undefined;
    }, {
        message: string;
        email: string;
        username?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        message: string;
        email: string;
        username?: string | undefined;
    };
}, {
    body: {
        message: string;
        email: string;
        username?: string | undefined;
    };
}>;
//# sourceMappingURL=feedback.zod.d.ts.map