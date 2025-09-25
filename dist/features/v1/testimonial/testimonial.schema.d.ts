import z from "zod";
export declare const getTestimonialParams: z.ZodObject<{
    params: z.ZodEffects<z.ZodObject<{
        testimonialId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        testimonialId: string;
    }, {
        testimonialId: string;
    }>, {
        testimonialId: string;
    }, {
        testimonialId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        testimonialId: string;
    };
}, {
    params: {
        testimonialId: string;
    };
}>;
export declare const createTestimonialSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        designation: z.ZodString;
        avatarUrl: z.ZodString;
        quote: z.ZodString;
        isVisible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        avatarUrl: string;
        designation: string;
        quote: string;
        isVisible?: boolean | undefined;
    }, {
        name: string;
        avatarUrl: string;
        designation: string;
        quote: string;
        isVisible?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        avatarUrl: string;
        designation: string;
        quote: string;
        isVisible?: boolean | undefined;
    };
}, {
    body: {
        name: string;
        avatarUrl: string;
        designation: string;
        quote: string;
        isVisible?: boolean | undefined;
    };
}>;
export declare const updateTestimonialSchema: z.ZodObject<{
    params: z.ZodEffects<z.ZodObject<{
        testimonialId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        testimonialId: string;
    }, {
        testimonialId: string;
    }>, {
        testimonialId: string;
    }, {
        testimonialId: string;
    }>;
} & {
    body: z.ZodEffects<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        designation: z.ZodOptional<z.ZodString>;
        avatarUrl: z.ZodOptional<z.ZodString>;
        quote: z.ZodOptional<z.ZodString>;
        isVisible: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        avatarUrl?: string | undefined;
        designation?: string | undefined;
        quote?: string | undefined;
        isVisible?: boolean | undefined;
    }, {
        name?: string | undefined;
        avatarUrl?: string | undefined;
        designation?: string | undefined;
        quote?: string | undefined;
        isVisible?: boolean | undefined;
    }>, {
        name?: string | undefined;
        avatarUrl?: string | undefined;
        designation?: string | undefined;
        quote?: string | undefined;
        isVisible?: boolean | undefined;
    }, {
        name?: string | undefined;
        avatarUrl?: string | undefined;
        designation?: string | undefined;
        quote?: string | undefined;
        isVisible?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        testimonialId: string;
    };
    body: {
        name?: string | undefined;
        avatarUrl?: string | undefined;
        designation?: string | undefined;
        quote?: string | undefined;
        isVisible?: boolean | undefined;
    };
}, {
    params: {
        testimonialId: string;
    };
    body: {
        name?: string | undefined;
        avatarUrl?: string | undefined;
        designation?: string | undefined;
        quote?: string | undefined;
        isVisible?: boolean | undefined;
    };
}>;
export type GetTestimonialParams = z.infer<typeof getTestimonialParams>["params"];
export type CreateTestimonialInput = z.infer<typeof createTestimonialSchema>["body"];
export type UpdateTestimonialInput = z.infer<typeof updateTestimonialSchema>["body"];
//# sourceMappingURL=testimonial.schema.d.ts.map