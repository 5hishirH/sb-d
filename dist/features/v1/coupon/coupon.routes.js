"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponRoutes = void 0;
const validate_1 = require("../../../middleware/validate");
const coupon_schema_1 = require("../../../schemas/coupon.schema");
const express_1 = require("express");
const coupon_controller_1 = require("./coupon.controller");
const course_zod_1 = require("../../../schemas/course.zod");
const couponRoutes = (0, express_1.Router)();
exports.couponRoutes = couponRoutes;
couponRoutes
    .route("/")
    .post((0, validate_1.validate)(coupon_schema_1.createCouponSchema), coupon_controller_1.createCoupon)
    .get(coupon_controller_1.getAllCoupons);
couponRoutes
    .route("/courses/:courseId")
    .get((0, validate_1.validate)(course_zod_1.courseIdSchema), coupon_controller_1.getCouponsForCourse);
couponRoutes
    .route("/:couponId/items")
    .patch((0, validate_1.validate)(coupon_schema_1.addItemsToCouponSchema), coupon_controller_1.addItemsToCoupon);
couponRoutes
    .route("/:couponId/make-universal")
    .put((0, validate_1.validate)(coupon_schema_1.getCouponParams), coupon_controller_1.addItemsToCoupon);
couponRoutes
    .route("/:couponId")
    .patch((0, validate_1.validate)(coupon_schema_1.updateCouponSchema), coupon_controller_1.updateCouponById)
    .delete((0, validate_1.validate)(coupon_schema_1.getCouponParams), coupon_controller_1.deleteCoupon);
//# sourceMappingURL=coupon.routes.js.map