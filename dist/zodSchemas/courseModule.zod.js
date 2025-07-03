"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModuleSchema = exports.updateModuleSchema = exports.createModuleSchema = exports.createManyModulesWithContentSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../utils/zod");
const course_model_1 = __importDefault(require("../models/course.model"));
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
const singleModuleWithContentSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    order: zod_1.z.number({ required_error: "Module order is required" }),
    course: zod_2.objectIdSchema,
    videos: zod_1.z.array(videoSchema).optional(),
    materials: zod_1.z.array(materialSchema).optional(),
    quizzes: zod_1.z.array(quizSchema).optional(),
    assignments: zod_1.z.array(assignmentSchema).optional(),
});
exports.createManyModulesWithContentSchema = zod_1.z.object({
    body: zod_1.z
        .array(singleModuleWithContentSchema)
        .nonempty("Request body must be a non-empty array of modules.")
        .refine((modules) => {
        if (modules.length <= 1)
            return true;
        const firstCourseId = modules[0].course;
        return modules.every((module) => module.course === firstCourseId);
    }, {
        message: "All modules in a single bulk request must belong to the same course.",
    })
        .refine(async (modules) => {
        const courseId = modules[0].course;
        return !!(await course_model_1.default.findById(courseId));
    }, {
        message: "Course not found for the provided modules.",
        path: [0, "course"],
    }),
});
exports.createModuleSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        order: zod_1.z.number({ required_error: "Order is required" }),
        course: zod_2.objectIdSchema.refine(async (id) => !!(await course_model_1.default.findById(id)), {
            message: "No course found with this ID",
        }),
    }),
});
exports.updateModuleSchema = zod_1.z.object({
    params: zod_1.z.object({
        moduleId: zod_2.objectIdSchema,
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        order: zod_1.z.number().optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty. Please provide at least one field to update.",
    }),
});
exports.deleteModuleSchema = zod_1.z.object({
    params: zod_1.z.object({
        moduleId: zod_2.objectIdSchema,
    }),
});
//# sourceMappingURL=courseModule.zod.js.map