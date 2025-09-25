"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonialById = exports.updateTestimonialById = exports.getTestimonialById = exports.getAllTestimonials = exports.createTestimonial = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const testimonial_model_1 = __importDefault(require("../../../models/testimonial.model"));
const ApiResponse_1 = require("../../../utils/ApiResponse");
exports.createTestimonial = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const testimonial = await testimonial_model_1.default.create(req.body);
    res
        .status(201)
        .json(new ApiResponse_1.ApiResponse(201, "Testimonial created successfully", testimonial, 1));
});
exports.getAllTestimonials = (0, asyncHandler_1.asyncHandler)(async (_, res) => {
    const testimonials = await testimonial_model_1.default.find().sort({ updatedAt: -1 });
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Testimonials are retrieved successfully", testimonials, testimonials.length));
});
exports.getTestimonialById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const testimonial = await testimonial_model_1.default.findById(req.params.testimonialId);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Testimonial is retrieved successfully", testimonial, 1));
});
exports.updateTestimonialById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const updatedTestimonial = await testimonial_model_1.default.findByIdAndUpdate(req.params.testimonialId, req.body, { new: true, runValidators: true });
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Testimonial updated successfully", updatedTestimonial, 1));
});
exports.deleteTestimonialById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    await testimonial_model_1.default.deleteOne({ _id: req.params.testimonialId });
    res.sendStatus(204);
});
//# sourceMappingURL=testimonial.controller.js.map