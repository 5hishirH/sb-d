"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiscountCoupon = void 0;
const discountCoupon_model_1 = __importDefault(require("../../../models/discountCoupon.model"));
const asyncHandler_1 = require("../../../utils/asyncHandler");
exports.createDiscountCoupon = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newCoupon = await discountCoupon_model_1.default.create(req.body);
    res.status(201).json({
        success: true,
        message: "Discount coupon created successfully",
        date: {
            _id: newCoupon["_id"],
            code: newCoupon["code"],
            discountPercentage: newCoupon["discountPercentage"],
            expiry: newCoupon["expiry"],
        },
    });
});
//# sourceMappingURL=discountCoupon.controller.js.map