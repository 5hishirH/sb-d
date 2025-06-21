"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseVideoSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    url: { type: String, required: true },
    order: { type: Number, required: true },
    module: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseModule",
        required: true,
    },
}, { timestamps: true });
const CourseVideo = (0, mongoose_1.model)("CourseVideo", courseVideoSchema);
exports.default = CourseVideo;
//# sourceMappingURL=courseVideo.model.js.map