"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const materialSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    order: { type: Number, required: true },
    isAccessedByDefault: { type: Boolean, default: false },
    module: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseModule",
        required: true,
    },
}, { timestamps: true });
const Material = (0, mongoose_1.model)("Material", materialSchema);
exports.default = Material;
//# sourceMappingURL=material.model.js.map