"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const assignmentSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true },
    order: { type: Number, required: true },
    isAccessedByDefault: { type: Boolean, default: false },
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
}, { timestamps: true });
const Assignment = (0, mongoose_1.model)("Assignment", assignmentSchema);
exports.default = Assignment;
//# sourceMappingURL=assignment.model.js.map