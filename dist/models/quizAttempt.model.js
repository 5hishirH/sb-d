"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionAttemptSubSchema = new mongoose_1.Schema({
    questionId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    presentedQuestion: {
        type: String,
        required: true,
    },
    presentedOptions: [
        {
            type: String,
            required: true,
        },
    ],
    selectedOption: {
        type: String,
        default: null,
    },
    isCorrect: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        required: true,
    },
});
const quizAttemptSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    quiz: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
    },
    questionAttempts: {
        type: [questionAttemptSubSchema],
        default: [],
    },
    score: {
        type: Number,
        default: 0,
    },
    totalQuestions: {
        type: Number,
        required: true,
    },
    startedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    completedAt: {
        type: Date,
        default: null,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    timeTaken: {
        type: Number,
        default: null,
    },
}, {
    timestamps: true,
});
const QuizAttempt = (0, mongoose_1.model)("QuizAttempt", quizAttemptSchema);
exports.default = QuizAttempt;
//# sourceMappingURL=quizAttempt.model.js.map