"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionSubSchema = void 0;
const mongoose_1 = require("mongoose");
exports.questionSubSchema = new mongoose_1.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAns: { type: String, required: true },
    order: { type: Number, required: true },
});
const quizSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    quizType: {
        type: String,
        enum: ["ModuleQuiz", "FinalQuiz"],
        required: true,
        default: "ModuleQuiz",
    },
    timeLimit: { type: Number },
    order: { type: Number, required: true },
    isAccessedByDefault: { type: Boolean, default: false },
    module: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseModule",
    },
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
    },
    questions: {
        type: [exports.questionSubSchema],
        default: [],
    },
}, {
    timestamps: true,
});
const Quiz = (0, mongoose_1.model)("Quiz", quizSchema);
exports.default = Quiz;
//# sourceMappingURL=quiz.model.js.map