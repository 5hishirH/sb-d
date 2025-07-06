"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionSubSchema = new mongoose_1.Schema({
    question: { type: String, required: true },
    options: [{ type: String }],
    correctAns: { type: Number, required: true },
    order: { type: Number, required: true },
});
const quizSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    timeLimit: { type: Number },
    order: { type: Number, required: true },
    isUnlockedByDefault: { type: Boolean, default: true },
    module: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseModule",
        required: true,
    },
    questions: {
        type: [questionSubSchema],
        default: [],
    },
}, {
    timestamps: true,
});
const Quiz = (0, mongoose_1.model)("Quiz", quizSchema);
exports.default = Quiz;
//# sourceMappingURL=quiz.model.js.map