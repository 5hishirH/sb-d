"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestionSchema = exports.deleteQuizSchema = exports.updateQuizSchema = exports.getQuizSchema = exports.createManyQuizzesSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
const courseModule_model_1 = __importDefault(require("../models/courseModule.model"));
const questionSchema = zod_1.z.object({
    question: zod_1.z.string({ required_error: "Question text is required" }),
    options: zod_1.z.array(zod_1.z.string()).nonempty("At least one option is required"),
    correctAns: zod_1.z.number({ required_error: "Correct answer index is required" }),
    order: zod_1.z.number({ required_error: "Order is required" }),
});
const singleQuizSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    timeLimit: zod_1.z.number().optional(),
    order: zod_1.z.number({ required_error: "Order is required" }),
    module: zod_2.objectIdSchema,
    questions: zod_1.z.array(questionSchema).optional(),
});
exports.createManyQuizzesSchema = zod_1.z.object({
    body: zod_1.z
        .array(singleQuizSchema)
        .nonempty("Request body must be a non-empty array of quizzes.")
        .refine(async (quizzes) => {
        const moduleIds = [...new Set(quizzes.map((q) => q.module))];
        const foundModulesCount = await courseModule_model_1.default.countDocuments({
            _id: { $in: moduleIds },
        });
        return foundModulesCount === moduleIds.length;
    }, {
        message: "One or more provided module IDs do not exist.",
    }),
});
exports.getQuizSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: zod_2.objectIdSchema,
    }),
});
exports.updateQuizSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        timeLimit: zod_1.z.number().optional(),
        order: zod_1.z.number().optional(),
        questions: zod_1.z.array(questionSchema).optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
exports.deleteQuizSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: zod_2.objectIdSchema,
    }),
});
exports.deleteQuestionSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: zod_2.objectIdSchema,
        questionId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=quiz.zod.js.map