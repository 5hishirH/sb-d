import z from "zod";
export declare const discountCouponSchema: z.ZodEffects<z.ZodObject<{
    code: z.ZodString;
    discountPercentage: z.ZodNumber;
    expiry: z.ZodDate;
    parentType: z.ZodEnum<["Course", "Ebook"]>;
    parent: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    discountPercentage: number;
    expiry: Date;
    parentType: "Course" | "Ebook";
    parent: string;
}, {
    code: string;
    discountPercentage: number;
    expiry: Date;
    parentType: "Course" | "Ebook";
    parent: string;
}>, {
    code: string;
    discountPercentage: number;
    expiry: Date;
    parentType: "Course" | "Ebook";
    parent: string;
}, {
    code: string;
    discountPercentage: number;
    expiry: Date;
    parentType: "Course" | "Ebook";
    parent: string;
}>;
export declare const createDiscountCouponSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodObject<{
        code: z.ZodString;
        discountPercentage: z.ZodNumber;
        expiry: z.ZodDate;
        parentType: z.ZodEnum<["Course", "Ebook"]>;
        parent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        discountPercentage: number;
        expiry: Date;
        parentType: "Course" | "Ebook";
        parent: string;
    }, {
        code: string;
        discountPercentage: number;
        expiry: Date;
        parentType: "Course" | "Ebook";
        parent: string;
    }>, {
        code: string;
        discountPercentage: number;
        expiry: Date;
        parentType: "Course" | "Ebook";
        parent: string;
    }, {
        code: string;
        discountPercentage: number;
        expiry: Date;
        parentType: "Course" | "Ebook";
        parent: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        code: string;
        discountPercentage: number;
        expiry: Date;
        parentType: "Course" | "Ebook";
        parent: string;
    };
}, {
    body: {
        code: string;
        discountPercentage: number;
        expiry: Date;
        parentType: "Course" | "Ebook";
        parent: string;
    };
}>;
export type CreateDiscountCouponInput = z.infer<typeof createDiscountCouponSchema>["body"];
//# sourceMappingURL=discount.schema.d.ts.map