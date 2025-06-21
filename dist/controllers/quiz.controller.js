"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuizWithQuestions = exports.deleteQuestionById = exports.updateQuizWithQuestions = exports.getQuizById = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const quiz_model_1 = __importDefault(require("../models/quiz.model"));
exports.getQuizById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quiz_model_1.default.findById(quizId);
    if (!quiz) {
        throw AppError_1.AppError.notFound(`Quiz not found with id of ${quizId}`);
    }
    res.status(200).json({
        success: true,
        data: quiz,
    });
});
exports.updateQuizWithQuestions = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { quizId } = req.params;
    const updatedQuiz = await quiz_model_1.default.findByIdAndUpdate(quizId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedQuiz) {
        throw AppError_1.AppError.notFound(`Quiz not found with id of ${quizId}`);
    }
    res.status(200).json({
        success: true,
        message: "Quiz updated successfully",
        data: updatedQuiz,
    });
});
exports.deleteQuestionById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { quizId, questionId } = req.params;
    const updatedQuiz = await quiz_model_1.default.findByIdAndUpdate(quizId, { $pull: { questions: { _id: questionId } } }, { new: true });
    if (!updatedQuiz) {
        throw AppError_1.AppError.notFound(`Quiz not found with id of ${quizId}`);
    }
    res.status(200).json({
        success: true,
        message: "Question deleted successfully",
        data: updatedQuiz,
    });
});
exports.deleteQuizWithQuestions = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quiz_model_1.default.findByIdAndDelete(quizId);
    if (!quiz) {
        throw AppError_1.AppError.notFound(`Quiz not found with id of ${quizId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=quiz.controller.js.map