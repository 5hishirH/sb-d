"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalQuiz = exports.ModuleQuiz = exports.questionSubSchema = void 0;
const mongoose_1 = require("mongoose");
exports.questionSubSchema = new mongoose_1.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAns: { type: String, required: true },
    order: { type: Number, required: true },
});
const quizBaseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    timeLimit: { type: Number },
    order: { type: Number, required: true },
    isAccessedByDefault: { type: Boolean, default: false },
    questions: {
        type: [exports.questionSubSchema],
        default: [],
    },
}, {
    timestamps: true,
    discriminatorKey: "quizType",
});
const Quiz = (0, mongoose_1.model)("Quiz", quizBaseSchema);
const moduleQuizSchema = new mongoose_1.Schema({
    module: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseModule",
        required: true,
    },
});
const finalQuizSchema = new mongoose_1.Schema({
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
});
exports.ModuleQuiz = Quiz.discriminator("ModuleQuiz", moduleQuizSchema);
exports.FinalQuiz = Quiz.discriminator("FinalQuiz", finalQuizSchema);
exports.default = Quiz;
//# sourceMappingURL=quiz.model.js.map