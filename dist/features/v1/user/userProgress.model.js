"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const quiz_model_1 = require("../../../features/v1/quiz/quiz.model");
const userCourseVideoSubSchema = new mongoose_1.Schema({
    video: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseVideo",
        required: true,
    },
    isAccessed: {
        type: Boolean,
        required: true,
        default: false,
    },
    watchedAt: Date,
    watchedDuration: {
        type: Number,
        required: true,
        default: 0,
    },
    isCompleted: { type: Boolean, required: true, default: false },
    completedAt: Date,
});
const userCourseMaterialSubSchema = new mongoose_1.Schema({
    material: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Material",
        required: true,
    },
    isAccessed: {
        type: Boolean,
        required: true,
        default: false,
    },
    accessedAt: Date,
});
const userCourseQuizAnsSubSchema = quiz_model_1.questionSubSchema.clone();
userCourseQuizAnsSubSchema.add({
    userAns: String,
    isCorrect: Boolean,
});
const userQuizAttemptSchema = new mongoose_1.Schema({
    attemptNumber: {
        type: Number,
        required: true,
    },
    fullScore: {
        type: Number,
        required: true,
    },
    userScore: {
        type: Number,
        required: true,
    },
    answers: [
        {
            type: userCourseQuizAnsSubSchema,
            required: true,
        },
    ],
    completedAt: {
        type: Date,
        required: true,
    },
});
const userCourseQuizSchema = new mongoose_1.Schema({
    quiz: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
    },
    quizType: {
        type: String,
        enum: ["ModuleQuiz", "FinalQuiz"],
        required: true,
    },
    isAccessed: {
        type: Boolean,
        required: true,
        default: false,
    },
    attempts: [
        {
            type: userQuizAttemptSchema,
        },
    ],
});
const userCourseModuleSchema = new mongoose_1.Schema({
    module: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseModule",
        required: true,
    },
    isCompleted: Boolean,
    videos: [userCourseVideoSubSchema],
    materials: [userCourseMaterialSubSchema],
    quizzes: [userCourseQuizSchema],
});
const userCourseAssignmentSubSchema = new mongoose_1.Schema({
    assignment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Assignment",
        required: true,
    },
    isAccessed: {
        type: Boolean,
        required: true,
        default: false,
    },
    submissionText: String,
    fileUrl: String,
    submittedAt: Date,
    fullScore: {
        type: Number,
        required: true,
    },
    uesrScore: Number,
    feedback: String,
    gradedAt: Date,
});
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
    modules: [
        {
            type: userCourseModuleSchema,
            required: true,
        },
    ],
    finalQuizzes: [userCourseQuizSchema],
    assignments: [
        {
            type: userCourseAssignmentSubSchema,
            required: true,
        },
    ],
    completedAt: Date,
}, {
    timestamps: true,
});
const UserProgress = (0, mongoose_1.model)("UserProgress", userProgressSchema);
exports.default = UserProgress;
//# sourceMappingURL=userProgress.model.js.map