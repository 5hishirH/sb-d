"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    thumbnailUrl: { type: String, required: true },
    price: { type: Number, min: 0, default: 0 },
    duration: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 5 },
    enrollmentCount: { type: Number, min: 0, default: 0 },
    isActive: { type: Boolean, default: false },
    instructor: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Instructor",
            required: true,
        },
    ],
    category: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "CourseCategory",
            required: true,
        },
    ],
}, { timestamps: true });
courseSchema.index({ title: "text", description: "text" });
const Course = (0, mongoose_1.model)("Course", courseSchema);
exports.default = Course;
//# sourceMappingURL=course.model.js.map