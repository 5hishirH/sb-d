"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseCategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    iconUrl: { type: String, required: true },
}, { timestamps: true });
const CourseCategory = (0, mongoose_1.model)("CourseCategory", courseCategorySchema);
exports.default = CourseCategory;
//# sourceMappingURL=courseCategory.model.js.map