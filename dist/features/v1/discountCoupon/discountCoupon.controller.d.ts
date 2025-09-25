export declare const createDiscountCoupon: import("express").RequestHandler<{}, {}, {
    code: string;
    discountPercentage: number;
    expiry: Date;
    parentType: "Course" | "Ebook";
    parent: string;
}, {}, Record<string, any>>;
//# sourceMappingURL=discountCoupon.controller.d.ts.map