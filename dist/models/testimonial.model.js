"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testimonialSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    designation: {
        type: String,
        required: true,
        trim: true,
    },
    avatarUrl: {
        type: String,
        required: true,
        trim: true,
    },
    quote: {
        type: String,
        required: true,
        trim: true,
    },
    isVisible: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
const Testimonial = (0, mongoose_1.model)("Testimonial", testimonialSchema);
exports.default = Testimonial;
//# sourceMappingURL=testimonial.model.js.map