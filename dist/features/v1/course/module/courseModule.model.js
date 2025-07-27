"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseModuleSchema = new mongoose_1.Schema({
    title: { type: String },
    order: { type: Number, required: true },
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course", required: true },
}, { timestamps: true });
const CourseModule = (0, mongoose_1.model)("CourseModule", courseModuleSchema);
exports.default = CourseModule;
//# sourceMappingURL=courseModule.model.js.map