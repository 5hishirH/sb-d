"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiscountCouponSchema = exports.discountCouponSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schema_1 = require("../schemas/common.schema");
const course_model_1 = __importDefault(require("../models/course.model"));
const ebook_model_1 = __importDefault(require("../models/ebook.model"));
const parentModelMap = {
    Course: course_model_1.default,
    Ebook: ebook_model_1.default,
};
exports.discountCouponSchema = zod_1.default
    .object({
    code: zod_1.default
        .string({ required_error: "Discount coupon code is required" })
        .min(2, "Discount coupon code must be at least 2 characters"),
    discountPercentage: zod_1.default
        .number({ required_error: "Discount percentage is required" })
        .min(1, "Discount percentage must be between 1 and 100")
        .max(100, "Discount percentage must be between 1 and 100"),
    expiry: zod_1.default.coerce
        .date({ required_error: "Discount coupon expiry date is required" })
        .min(new Date(), { message: "Expiry date cannot be in the past." }),
    parentType: zod_1.default.enum(["Course", "Ebook"], {
        required_error: "A parent type ('Course' or 'Ebook') is required.",
    }),
    parent: common_schema_1.objectIdSchema,
})
    .refine(async ({ parentType, parent }) => {
    const Model = parentModelMap[parentType];
    if (!Model) {
        return false;
    }
    const documentExists = await Model.exists({ _id: parent });
    return !!documentExists;
}, {
    message: "The specified parent document does not exist for the given parent type.",
    path: ["parent"],
});
exports.createDiscountCouponSchema = zod_1.default.object({
    body: exports.discountCouponSchema,
});
//# sourceMappingURL=discount.schema.js.map