"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("../../../middleware/validate");
const express_1 = require("express");
const testimonial_schema_1 = require("./testimonial.schema");
const testimonial_controller_1 = require("./testimonial.controller");
const router = (0, express_1.Router)();
router
    .route("/")
    .post((0, validate_1.validate)(testimonial_schema_1.createTestimonialSchema), testimonial_controller_1.createTestimonial)
    .get(testimonial_controller_1.getAllTestimonials);
router
    .route("/:testimonialId")
    .get((0, validate_1.validate)(testimonial_schema_1.getTestimonialParams), testimonial_controller_1.getTestimonialById)
    .patch((0, validate_1.validate)(testimonial_schema_1.updateTestimonialSchema), testimonial_controller_1.updateTestimonialById)
    .delete((0, validate_1.validate)(testimonial_schema_1.getTestimonialParams), testimonial_controller_1.deleteTestimonialById);
exports.default = router;
//# sourceMappingURL=testimonial.routes.js.map