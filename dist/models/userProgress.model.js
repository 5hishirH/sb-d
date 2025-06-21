"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userProgressSchema = new mongoose_1.Schema({
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
    videosWatched: [
        {
            video: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "CourseVideo",
            },
            watchedAt: {
                type: Date,
                default: Date.now,
            },
            watchedDuration: Number,
            isCompleted: {
                type: Boolean,
                default: false,
            },
        },
    ],
    materialsAccessed: [
        {
            material: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Material",
            },
            accessedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    quizAttempts: [
        {
            quiz: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Quiz",
            },
            attemptNumber: Number,
            score: Number,
            answers: [
                {
                    question: String,
                    answer: String,
                    isCorrect: Boolean,
                },
            ],
            completedAt: Date,
        },
    ],
    assignmentSubmissions: [
        {
            assignment: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Assignment",
            },
            submissionText: String,
            fileUrl: String,
            submittedAt: {
                type: Date,
                default: Date.now,
            },
            grade: Number,
            feedback: String,
            gradedAt: Date,
        },
    ],
    enrolledAt: {
        type: Date,
        default: Date.now,
    },
    completedAt: Date,
    overallProgress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
}, {
    timestamps: true,
});
const UserProgress = (0, mongoose_1.model)("UserProgress", userProgressSchema);
exports.default = UserProgress;
//# sourceMappingURL=userProgress.model.js.map