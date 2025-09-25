import z from "zod";
export declare const createCouponSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    body: z.ZodObject<{
        code: z.ZodString;
        discountPercentage: z.ZodNumber;
        expiry: z.ZodDate;
        appliesTo: z.ZodOptional<z.ZodArray<z.ZodObject<{
            itemType: z.ZodEnum<["Course", "Ebook"]>;
            itemId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            itemType: "Course" | "Ebook";
            itemId: string;
        }, {
            itemType: "Course" | "Ebook";
            itemId: string;
        }>, "atleastone">>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    }, {
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    };
}, {
    body: {
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    };
}>, {
    body: {
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    };
}, {
    body: {
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    };
}>, {
    body: {
        couponType: "Universal" | "Exclusive";
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    };
}, {
    body: {
        code: string;
        discountPercentage: number;
        expiry: Date;
        appliesTo?: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]] | undefined;
    };
}>;
export declare const getCouponParams: z.ZodObject<{
    params: z.ZodObject<{
        couponId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        couponId: string;
    }, {
        couponId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        couponId: string;
    };
}, {
    params: {
        couponId: string;
    };
}>;
export declare const addItemsToCouponSchema: z.ZodEffects<z.ZodObject<{
    params: z.ZodObject<{
        couponId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        couponId: string;
    }, {
        couponId: string;
    }>;
} & {
    body: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            itemType: z.ZodEnum<["Course", "Ebook"]>;
            itemId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            itemType: "Course" | "Ebook";
            itemId: string;
        }, {
            itemType: "Course" | "Ebook";
            itemId: string;
        }>, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        items: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]];
    }, {
        items: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]];
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        couponId: string;
    };
    body: {
        items: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]];
    };
}, {
    params: {
        couponId: string;
    };
    body: {
        items: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]];
    };
}>, {
    params: {
        couponId: string;
    };
    body: {
        items: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]];
    };
}, {
    params: {
        couponId: string;
    };
    body: {
        items: [{
            itemType: "Course" | "Ebook";
            itemId: string;
        }, ...{
            itemType: "Course" | "Ebook";
            itemId: string;
        }[]];
    };
}>;
export declare const updateCouponSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    params: z.ZodObject<{
        couponId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        couponId: string;
    }, {
        couponId: string;
    }>;
} & {
    body: z.ZodObject<{
        code: z.ZodOptional<z.ZodString>;
        discountPercentage: z.ZodOptional<z.ZodNumber>;
        expiry: z.ZodOptional<z.ZodEffects<z.ZodDate, Date, Date>>;
        appliesTo: z.ZodOptional<z.ZodArray<z.ZodObject<{
            itemType: z.ZodEnum<["Course", "Ebook"]>;
            itemId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            itemType: "Course" | "Ebook";
            itemId: string;
        }, {
            itemType: "Course" | "Ebook";
            itemId: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    }, {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        couponId: string;
    };
    body: {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    };
}, {
    params: {
        couponId: string;
    };
    body: {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    };
}>, {
    params: {
        couponId: string;
    };
    body: {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    };
}, {
    params: {
        couponId: string;
    };
    body: {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    };
}>, {
    params: {
        couponId: string;
    };
    body: {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    };
}, {
    params: {
        couponId: string;
    };
    body: {
        code?: string | undefined;
        discountPercentage?: number | undefined;
        expiry?: Date | undefined;
        appliesTo?: {
            itemType: "Course" | "Ebook";
            itemId: string;
        }[] | undefined;
    };
}>;
export type CreateCouponBody = z.infer<typeof createCouponSchema>["body"];
export type GetCouponParams = z.infer<typeof getCouponParams>["params"];
export type AddItemsToCouponBody = z.infer<typeof addItemsToCouponSchema>["body"];
export type UpdateCouponBody = z.infer<typeof updateCouponSchema>["body"];
//# sourceMappingURL=coupon.schema.d.ts.map