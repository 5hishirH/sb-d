"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const discountCouponSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    expiry: { type: Date, required: true },
    parent: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        refPath: "parentType",
    },
    parentType: {
        type: String,
        required: true,
        enum: ["Course", "Ebook"],
    },
}, { timestamps: true });
discountCouponSchema.index({ parent: 1, parentType: 1 });
const DiscountCoupon = (0, mongoose_1.model)("DiscountCoupon", discountCouponSchema);
exports.default = DiscountCoupon;
//# sourceMappingURL=discountCoupon.model.js.map