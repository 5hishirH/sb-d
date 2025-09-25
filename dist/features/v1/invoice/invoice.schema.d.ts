import z from "zod";
export declare const purchaseSchema: z.ZodEffects<z.ZodObject<{
    body: z.ZodObject<{
        productType: z.ZodEnum<["Course", "Ebook"]>;
        product: z.ZodString;
        price: z.ZodNumber;
        paymentMethod: z.ZodEnum<["bkash"]>;
    }, "strip", z.ZodTypeAny, {
        price: number;
        productType: "Course" | "Ebook";
        product: string;
        paymentMethod: "bkash";
    }, {
        price: number;
        productType: "Course" | "Ebook";
        product: string;
        paymentMethod: "bkash";
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        price: number;
        productType: "Course" | "Ebook";
        product: string;
        paymentMethod: "bkash";
    };
}, {
    body: {
        price: number;
        productType: "Course" | "Ebook";
        product: string;
        paymentMethod: "bkash";
    };
}>, {
    body: {
        price: number;
        productType: "Course" | "Ebook";
        product: string;
        paymentMethod: "bkash";
    };
}, {
    body: {
        price: number;
        productType: "Course" | "Ebook";
        product: string;
        paymentMethod: "bkash";
    };
}>;
export type PurchaseInput = z.infer<typeof purchaseSchema>["body"];
//# sourceMappingURL=invoice.schema.d.ts.map