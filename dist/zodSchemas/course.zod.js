"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseSchema = exports.updateCourseSchema = exports.getCourseSchema = exports.getAllCoursesSchema = exports.createManyCoursesWithContentSchema = exports.createCourseWithContentSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
const instructor_model_1 = __importDefault(require("../models/instructor.model"));
const courseCategory_model_1 = __importDefault(require("../models/courseCategory.model"));
const questionSchema = zod_1.z.object({
    question: zod_1.z.string({ required_error: "Question text is required" }),
    options: zod_1.z.array(zod_1.z.string()).nonempty("At least one option is required"),
    correctAns: zod_1.z.number({ required_error: "Correct answer index is required" }),
    order: zod_1.z.number({ required_error: "Question order is required" }),
});
const quizSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Quiz title is required" }),
    timeLimit: zod_1.z.number().optional(),
    order: zod_1.z.number({ required_error: "Quiz order is required" }),
    questions: zod_1.z.array(questionSchema).optional(),
});
const videoSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    url: zod_1.z.string({ required_error: "Video URL is required" }).url(),
    order: zod_1.z.number({ required_error: "Video order is required" }),
});
const materialSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Material title is required" }),
    description: zod_1.z.string().optional(),
    url: zod_1.z.string({ required_error: "Material URL is required" }).url(),
    order: zod_1.z.number({ required_error: "Material order is required" }),
});
const assignmentSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Assignment title is required" }),
    description: zod_1.z.string().optional(),
    duration: zod_1.z.number({ required_error: "Duration is required" }),
    order: zod_1.z.number({ required_error: "Assignment order is required" }),
});
const moduleSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    order: zod_1.z.number({ required_error: "Module order is required" }),
    videos: zod_1.z.array(videoSchema).optional(),
    materials: zod_1.z.array(materialSchema).optional(),
    quizzes: zod_1.z.array(quizSchema).optional(),
    assignments: zod_1.z.array(assignmentSchema).optional(),
});
const singleCourseWithContentSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    description: zod_1.z.string().optional(),
    thumbnailUrl: zod_1.z.string().url("Thumbnail must be a valid URL").optional(),
    price: zod_1.z.number({ required_error: "Price is required" }).min(0),
    instructor: zod_2.objectIdSchema.refine(async (id) => !!(await instructor_model_1.default.findById(id)), {
        message: "Instructor not found",
    }),
    category: zod_2.objectIdSchema.refine(async (id) => !!(await courseCategory_model_1.default.findById(id)), {
        message: "Category not found",
    }),
    modules: zod_1.z.array(moduleSchema).optional(),
});
exports.createCourseWithContentSchema = zod_1.z.object({
    body: singleCourseWithContentSchema,
});
exports.createManyCoursesWithContentSchema = zod_1.z.object({
    body: zod_1.z
        .array(singleCourseWithContentSchema)
        .nonempty("Request body must be a non-empty array of courses."),
});
exports.getAllCoursesSchema = zod_1.z.object({
    query: zod_1.z.object({
        category: zod_2.objectIdSchema.optional(),
        instructor: zod_2.objectIdSchema.optional(),
    }),
});
exports.getCourseSchema = zod_1.z.object({
    params: zod_1.z.object({
        courseId: zod_2.objectIdSchema,
    }),
});
exports.updateCourseSchema = zod_1.z.object({
    params: zod_1.z.object({
        courseId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        thumbnailUrl: zod_1.z.string().url("Must be a valid URL").optional(),
        price: zod_1.z.number().min(0).optional(),
        duration: zod_1.z.number().min(0).optional(),
        instructor: zod_2.objectIdSchema.optional(),
        category: zod_2.objectIdSchema.optional(),
    })
        .refine(async (data) => {
        if (!data.instructor)
            return true;
        return !!(await instructor_model_1.default.findById(data.instructor));
    }, {
        message: "Instructor not found with the provided ID",
        path: ["instructor"],
    })
        .refine(async (data) => {
        if (!data.category)
            return true;
        return !!(await courseCategory_model_1.default.findById(data.category));
    }, {
        message: "Category not found with the provided ID",
        path: ["category"],
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    }),
});
exports.deleteCourseSchema = zod_1.z.object({
    params: zod_1.z.object({
        courseId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=course.zod.js.map