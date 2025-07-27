"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestionSchema = exports.deleteQuizSchema = exports.updateQuizSchema = exports.getQuizSchema = exports.createManyQuizzesSchema = exports.singleQuizSchema = exports.questionSchema = void 0;
const zod_1 = require("zod");
const common_schema_1 = require("../schemas/common.schema");
const courseModule_model_1 = __importDefault(require("../models/courseModule.model"));
const course_model_1 = __importDefault(require("../models/course.model"));
exports.questionSchema = zod_1.z
    .object({
    question: zod_1.z.string({ required_error: "Question text is required" }),
    options: zod_1.z.array(zod_1.z.string()).min(2, "At least two options are required"),
    correctAns: zod_1.z.string({ required_error: "Correct answer is required" }),
    order: zod_1.z.number({ required_error: "Order is required" }),
})
    .refine((data) => data.options.includes(data.correctAns), {
    message: "Correct answer must be one of the options",
    path: ["correctAns"],
});
const quizBaseSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    timeLimit: zod_1.z.number().optional(),
    order: zod_1.z.number({ required_error: "Order is required" }),
    isAccessedByDefault: zod_1.z.boolean().default(false),
    questions: zod_1.z.array(exports.questionSchema).optional(),
});
const moduleQuizSchema = quizBaseSchema.extend({
    quizType: zod_1.z.literal("ModuleQuiz"),
    module: common_schema_1.objectIdSchema,
});
const finalQuizSchema = quizBaseSchema.extend({
    quizType: zod_1.z.literal("FinalQuiz"),
    course: common_schema_1.objectIdSchema,
});
exports.singleQuizSchema = zod_1.z.discriminatedUnion("quizType", [
    moduleQuizSchema,
    finalQuizSchema,
]);
exports.createManyQuizzesSchema = zod_1.z.object({
    body: zod_1.z
        .array(exports.singleQuizSchema)
        .nonempty("Request body must be a non-empty array of quizzes.")
        .refine(async (quizzes) => {
        const moduleIds = quizzes
            .filter((q) => q.quizType === "ModuleQuiz")
            .map((q) => q.module);
        const courseIds = quizzes
            .filter((q) => q.quizType === "FinalQuiz")
            .map((q) => q.course);
        const [foundModulesCount, foundCoursesCount] = await Promise.all([
            moduleIds.length > 0
                ? courseModule_model_1.default.countDocuments({ _id: { $in: moduleIds } })
                : Promise.resolve(moduleIds.length),
            courseIds.length > 0
                ? course_model_1.default.countDocuments({ _id: { $in: courseIds } })
                : Promise.resolve(courseIds.length),
        ]);
        return (foundModulesCount === new Set(moduleIds).size &&
            foundCoursesCount === new Set(courseIds).size);
    }, {
        message: "One or more provided module or course IDs do not exist.",
    }),
});
exports.getQuizSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: common_schema_1.objectIdSchema,
    }),
});
exports.updateQuizSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: common_schema_1.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        timeLimit: zod_1.z.number().optional(),
        order: zod_1.z.number().optional(),
        isAccessedByDefault: zod_1.z.boolean().optional(),
        questions: zod_1.z.array(exports.questionSchema).optional(),
        module: common_schema_1.objectIdSchema.optional(),
        course: common_schema_1.objectIdSchema.optional(),
    })
        .strict()
        .superRefine((data, ctx) => {
        if (Object.keys(data).length === 0) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "Update body cannot be empty.",
            });
        }
        if (data.module && data.course) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "A quiz cannot have both a 'module' and a 'course' ID.",
                path: ["module", "course"],
            });
        }
    })
        .refine(async (data) => {
        const validations = [];
        if (data.module) {
            validations.push(courseModule_model_1.default.exists({ _id: data.module }));
        }
        if (data.course) {
            validations.push(course_model_1.default.exists({ _id: data.course }));
        }
        if (validations.length > 0) {
            const results = await Promise.all(validations);
            return results.every((result) => result !== null);
        }
        return true;
    }, {
        message: "The provided module or course ID does not exist.",
    }),
});
exports.deleteQuizSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: common_schema_1.objectIdSchema,
    }),
});
exports.deleteQuestionSchema = zod_1.z.object({
    params: zod_1.z.object({
        quizId: common_schema_1.objectIdSchema,
        questionId: common_schema_1.objectIdSchema,
    }),
});
//# sourceMappingURL=quiz.zod.js.map