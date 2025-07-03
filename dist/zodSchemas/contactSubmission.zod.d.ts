import { z } from "zod";
export declare const createContactSubmissionSchema: z.ZodObject<{
    body: z.ZodObject<{
        username: z.ZodOptional<z.ZodString>;
        email: z.ZodString;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
        message: string;
        username?: string | undefined;
    }, {
        email: string;
        message: string;
        username?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        message: string;
        username?: string | undefined;
    };
}, {
    body: {
        email: string;
        message: string;
        username?: string | undefined;
    };
}>;
//# sourceMappingURL=contactSubmission.zod.d.ts.map