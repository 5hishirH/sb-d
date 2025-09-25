"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCouponSchema = exports.addItemsToCouponSchema = exports.getCouponParams = exports.createCouponSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schema_1 = require("./common.schema");
const course_model_1 = __importDefault(require("../models/course.model"));
const ebook_model_1 = __importDefault(require("../models/ebook.model"));
const coupon_model_1 = __importDefault(require("../models/coupon.model"));
async function validateItemIds(model, ids, ctx, errorMessage) {
    if (ids.length === 0)
        return;
    const uniqueIds = [...new Set(ids)];
    const count = await model.countDocuments({ _id: { $in: uniqueIds } });
    if (count !== uniqueIds.length) {
        ctx.addIssue({
            code: zod_1.default.ZodIssueCode.custom,
            message: errorMessage,
            path: ["appliesTo"],
        });
    }
}
const appliedItemSchema = zod_1.default.object({
    itemType: zod_1.default.enum(["Course", "Ebook"]),
    itemId: common_schema_1.objectIdSchema,
});
const couponInputSchema = zod_1.default.object({
    code: zod_1.default
        .string({ required_error: "Coupon code is required." })
        .min(2, "Coupon code must be at least 2 characters."),
    discountPercentage: zod_1.default
        .number({ required_error: "Discount percentage is required" })
        .min(1, "Discount percentage cannot be less than 1.")
        .max(100, "Discount percentage cannot be more than 100."),
    expiry: zod_1.default.coerce
        .date({
        required_error: "Coupon expiry date is required. Preferred format: YYYY-MM-DD.",
    })
        .min(new Date(), "Expiry cannot be the date of the present or past"),
    appliesTo: zod_1.default.array(appliedItemSchema).nonempty().optional(),
});
exports.createCouponSchema = zod_1.default
    .object({
    body: couponInputSchema,
})
    .superRefine(async ({ body }, ctx) => {
    if (body.appliesTo) {
        const courseIds = body.appliesTo
            .filter(({ itemType }) => itemType === "Course")
            .map(({ itemId }) => itemId);
        const ebookIds = body.appliesTo
            .filter(({ itemType }) => itemType === "Ebook")
            .map(({ itemId }) => itemId);
        await Promise.all([
            validateItemIds(course_model_1.default, courseIds, ctx, "One or more course IDs are invalid."),
            validateItemIds(ebook_model_1.default, ebookIds, ctx, "One or more ebook IDs are invalid."),
        ]);
    }
})
    .transform((data) => ({
    body: {
        ...data.body,
        couponType: data.body.appliesTo
            ? "Exclusive"
            : "Universal",
    },
}));
exports.getCouponParams = zod_1.default.object({
    params: zod_1.default.object({
        couponId: common_schema_1.objectIdSchema,
    }),
});
exports.addItemsToCouponSchema = exports.getCouponParams
    .extend({
    body: zod_1.default.object({
        items: zod_1.default.array(appliedItemSchema).nonempty({
            message: "Items array cannot be empty.",
        }),
    }),
})
    .superRefine(async ({ body }, ctx) => {
    if (body.items) {
        const courseIds = body.items
            .filter(({ itemType }) => itemType === "Course")
            .map(({ itemId }) => itemId);
        const ebookIds = body.items
            .filter(({ itemType }) => itemType === "Ebook")
            .map(({ itemId }) => itemId);
        await Promise.all([
            validateItemIds(course_model_1.default, courseIds, ctx, "One or more course IDs are invalid."),
            validateItemIds(ebook_model_1.default, ebookIds, ctx, "One or more ebook IDs are invalid."),
        ]);
    }
});
exports.updateCouponSchema = exports.getCouponParams
    .extend({
    body: zod_1.default.object({
        code: zod_1.default
            .string({ required_error: "Coupon code is required." })
            .min(2, "Coupon code must be at least 2 characters.")
            .optional(),
        discountPercentage: zod_1.default
            .number({ required_error: "Discount percentage is required" })
            .min(1, "Discount percentage cannot be less than 1.")
            .max(100, "Discount percentage cannot be more than 100.")
            .optional(),
        expiry: zod_1.default.coerce
            .date({
            required_error: "Coupon expiry date is required. Preferred format: YYYY-MM-DD.",
        })
            .refine((date) => date > new Date(), {
            message: "Expiry date must be in the future.",
        })
            .optional(),
        appliesTo: zod_1.default.array(appliedItemSchema).optional(),
    }),
})
    .refine(async ({ params: { couponId } }) => {
    const couponExists = await coupon_model_1.default.exists({ _id: couponId });
    return couponExists !== null;
}, {
    message: "Coupon with this ID not found.",
    path: ["params", "couponId"],
})
    .superRefine(async ({ body }, ctx) => {
    if (body.appliesTo) {
        const courseIds = body.appliesTo
            .filter(({ itemType }) => itemType === "Course")
            .map(({ itemId }) => itemId);
        const ebookIds = body.appliesTo
            .filter(({ itemType }) => itemType === "Ebook")
            .map(({ itemId }) => itemId);
        await Promise.all([
            validateItemIds(course_model_1.default, courseIds, ctx, "One or more course IDs are invalid."),
            validateItemIds(ebook_model_1.default, ebookIds, ctx, "One or more ebook IDs are invalid."),
        ]);
    }
});
//# sourceMappingURL=coupon.schema.js.map