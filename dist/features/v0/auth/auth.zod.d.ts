import { z } from "zod";
export declare const registerUserSchema: z.ZodObject<{} & {
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
    } & {
        phone: z.ZodOptional<z.ZodString>;
        dateOfBirth: z.ZodOptional<z.ZodDate>;
        institution: z.ZodOptional<z.ZodString>;
        occupation: z.ZodOptional<z.ZodString>;
        year: z.ZodOptional<z.ZodNumber>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    }, {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    };
}, {
    body: {
        name: string;
        email: string;
        password: string;
        phone?: string | undefined;
        dateOfBirth?: Date | undefined;
        institution?: string | undefined;
        occupation?: string | undefined;
        year?: number | undefined;
        address?: string | undefined;
    };
}>;
export type registerUserInput = z.infer<typeof registerUserSchema>["body"];
//# sourceMappingURL=auth.zod.d.ts.map