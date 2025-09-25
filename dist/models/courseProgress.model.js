"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseProgressSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    progressPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    completedVideos: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "CourseVideo",
        },
    ],
    completedModuleMaterials: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "ModuleMaterial",
        },
    ],
    completedFinalMaterials: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "FinalMaterial",
        },
    ],
    completedModuleQuizzes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "ModuleQuiz",
        },
    ],
    completedFinalQuizzes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "FinalQuiz",
        },
    ],
}, { timestamps: true });
const CourseProgress = (0, mongoose_1.model)("CourseProgress", courseProgressSchema);
exports.default = CourseProgress;
//# sourceMappingURL=courseProgress.model.js.map