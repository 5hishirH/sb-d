declare const createCoupon: import("express").RequestHandler<{}, {}, {
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
}, {}, Record<string, any>>;
declare const getAllCoupons: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
declare const getCouponsForCourse: import("express").RequestHandler<{
    courseId: string;
}, {}, {}, {}, Record<string, any>>;
declare const getCouponsForEbook: import("express").RequestHandler<{
    ebookId: string;
}, {}, {}, {}, Record<string, any>>;
declare const updateCouponById: import("express").RequestHandler<{
    couponId: string;
}, {}, {
    code?: string | undefined;
    discountPercentage?: number | undefined;
    expiry?: Date | undefined;
    appliesTo?: {
        itemType: "Course" | "Ebook";
        itemId: string;
    }[] | undefined;
}, {}, Record<string, any>>;
declare const addItemsToCoupon: import("express").RequestHandler<{
    couponId: string;
}, {}, {
    items: [{
        itemType: "Course" | "Ebook";
        itemId: string;
    }, ...{
        itemType: "Course" | "Ebook";
        itemId: string;
    }[]];
}, {}, Record<string, any>>;
declare const makeCouponUniversal: import("express").RequestHandler<{
    couponId: string;
}, {}, {}, {}, Record<string, any>>;
declare const deleteCoupon: import("express").RequestHandler<{
    couponId: string;
}, {}, {}, {}, Record<string, any>>;
export { createCoupon, getAllCoupons, getCouponsForCourse, getCouponsForEbook, updateCouponById, addItemsToCoupon, makeCouponUniversal, deleteCoupon, };
//# sourceMappingURL=coupon.controller.d.ts.map