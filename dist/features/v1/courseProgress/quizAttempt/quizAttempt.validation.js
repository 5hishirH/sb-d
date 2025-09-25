"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitQuizAttemptSchema = exports.getQuizAttemptSchema = void 0;
const quiz_model_1 = __importDefault(require("../../../../models/quiz.model"));
const common_schema_1 = require("../../../../schemas/common.schema");
const common_validation_1 = require("../../../../features/v1/common.validation");
const zod_1 = require("zod");
exports.getQuizAttemptSchema = zod_1.z.object({
    params: zod_1.z.object({
        courseId: common_schema_1.objectIdSchema,
        quizId: common_schema_1.objectIdSchema.refine(async (quizId) => {
            const quizExists = await quiz_model_1.default.exists({ _id: quizId });
            return !!quizExists;
        }, {
            message: "Invalid quiz id",
            path: ["quizId"],
        }),
    }),
});
const answerSchema = zod_1.z.object({
    questionId: common_validation_1.objectIdSchema,
    selectedOption: zod_1.z.string().nonempty("Selected option is required"),
});
exports.submitQuizAttemptSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizAttemptId: common_validation_1.objectIdSchema,
        courseId: common_validation_1.objectIdSchema,
    }),
    body: zod_1.z.object({
        answers: zod_1.z.array(answerSchema).min(1, "At least one answer is required"),
        submittedAt: zod_1.z
            .date()
            .optional()
            .default(() => new Date()),
    }),
});
//# sourceMappingURL=quizAttempt.validation.js.map