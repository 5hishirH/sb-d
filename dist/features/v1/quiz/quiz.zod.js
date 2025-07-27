"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestionSchema = exports.deleteQuizSchema = exports.updateQuizSchema = exports.getQuizSchema = exports.createManyQuizzesSchema = exports.singleQuizSchema = exports.questionSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../../../utils/zod");
const courseModule_model_1 = __importDefault(require("../../../features/v1/course/module/courseModule.model"));
const course_model_1 = __importDefault(require("../../../features/v1/course/course.model"));
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
exports.singleQuizSchema = zod_1.z.discriminatedUnion("quizType", [
    zod_1.z.object({
        quizType: zod_1.z.literal("ModuleQuiz"),
        title: zod_1.z.string({ required_error: "Title is required" }),
        timeLimit: zod_1.z.number().optional(),
        order: zod_1.z.number({ required_error: "Order is required" }),
        isAccessedByDefault: zod_1.z.boolean().default(false),
        module: zod_2.objectIdSchema,
        questions: zod_1.z.array(exports.questionSchema).optional(),
    }),
    zod_1.z.object({
        quizType: zod_1.z.literal("FinalQuiz"),
        title: zod_1.z.string({ required_error: "Title is required" }),
        timeLimit: zod_1.z.number().optional(),
        order: zod_1.z.number({ required_error: "Order is required" }),
        isAccessedByDefault: zod_1.z.boolean().default(false),
        course: zod_2.objectIdSchema,
        questions: zod_1.z.array(exports.questionSchema).optional(),
    }),
]);
exports.createManyQuizzesSchema = zod_1.z.object({
    body: zod_1.z
        .array(exports.singleQuizSchema)
        .nonempty("Request body must be a non-empty array of quizzes.")
        .refine(async (quizzes) => {
        const moduleIds = [
            ...new Set(quizzes
                .filter((q) => q.quizType === "ModuleQuiz")
                .map((q) => q.module)),
        ];
        const courseIds = [
            ...new Set(quizzes
                .filter((q) => q.quizType === "FinalQuiz")
                .map((q) => q.course)),
        ];
        const moduleValidation = courseModule_model_1.default.countDocuments({
            _id: { $in: moduleIds },
        });
        const courseValidation = course_model_1.default.countDocuments({
            _id: { $in: courseIds },
        });
        const [foundModulesCount, foundCoursesCount] = await Promise.all([
            moduleValidation,
            courseValidation,
        ]);
        const areModulesValid = foundModulesCount === moduleIds.length;
        const areCoursesValid = foundCoursesCount === courseIds.length;
        return areModulesValid && areCoursesValid;
    }, {
        message: "One or more provided module or course IDs do not exist.",
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
        quizType: zod_1.z.enum(["ModuleQuiz", "FinalQuiz"]).optional(),
        timeLimit: zod_1.z.number().optional(),
        order: zod_1.z.number().optional(),
        module: zod_2.objectIdSchema.optional(),
        course: zod_2.objectIdSchema.optional(),
        questions: zod_1.z.array(exports.questionSchema).optional(),
    })
        .superRefine((data, ctx) => {
        if (Object.keys(data).length === 0) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "Update body cannot be empty.",
            });
        }
        if (data.quizType === "ModuleQuiz" && data.course) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "Cannot provide a 'course' ID when setting quizType to 'ModuleQuiz'.",
                path: ["course"],
            });
        }
        if (data.quizType === "FinalQuiz" && data.module) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "Cannot provide a 'module' ID when setting quizType to 'FinalQuiz'.",
                path: ["module"],
            });
        }
    })
        .refine(async (data) => {
        if (data.module) {
            const moduleExists = await courseModule_model_1.default.findById(data.module);
            if (!moduleExists)
                return false;
        }
        if (data.course) {
            const courseExists = await course_model_1.default.findById(data.course);
            if (!courseExists)
                return false;
        }
        return true;
    }, {
        message: "The provided module or course ID does not exist.",
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