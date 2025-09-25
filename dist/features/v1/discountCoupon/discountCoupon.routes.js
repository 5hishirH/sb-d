"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("../../../middleware/validate");
const express_1 = require("express");
const discount_schema_1 = require("../../../schemas/discount.schema");
const discountCoupon_controller_1 = require("./discountCoupon.controller");
const router = (0, express_1.Router)();
router
    .route("/")
    .post((0, validate_1.validate)(discount_schema_1.createDiscountCouponSchema), discountCoupon_controller_1.createDiscountCoupon);
exports.default = router;
//# sourceMappingURL=discountCoupon.routes.js.map