"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourseSchema = exports.getCourseSchema = exports.getAllCoursesSchema = exports.createManyCoursesWithContentSchema = exports.createCourseWithContentSchema = void 0;
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
    questions: zod_1.z
        .array(questionSchema)
        .nonempty("Atleast one questions is required"),
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
const moduleSchema = zod_1.z
    .object({
    title: zod_1.z.string().optional(),
    order: zod_1.z.number({ required_error: "Module order is required" }),
    videos: zod_1.z.array(videoSchema).optional(),
    materials: zod_1.z.array(materialSchema).optional(),
    quizzes: zod_1.z.array(quizSchema).optional(),
    assignments: zod_1.z.array(assignmentSchema).optional(),
})
    .refine((data) => {
    const hasContent = (data.videos && data.videos.length > 0) ||
        (data.materials && data.materials.length > 0) ||
        (data.quizzes && data.quizzes.length > 0) ||
        (data.assignments && data.assignments.length > 0);
    return hasContent;
}, {
    message: "A module must contain at least one video, material, quiz, or assignment.",
});
const singleCourseWithContentSchema = zod_1.z
    .object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    description: zod_1.z.string().optional(),
    thumbnailUrl: zod_1.z.string().url("Thumbnail must be a valid URL").optional(),
    price: zod_1.z.number({ required_error: "Price is required" }).min(0),
    duration: zod_1.z
        .number({ required_error: "Course duration is required" })
        .min(0),
    rating: zod_1.z.number().min(0).max(5).optional(),
    instructor: zod_1.z
        .array(zod_2.objectIdSchema)
        .nonempty("At least one instructor is required."),
    category: zod_1.z
        .array(zod_2.objectIdSchema)
        .nonempty("At least one category is required."),
    modules: zod_1.z.array(moduleSchema).optional(),
})
    .refine(async (data) => {
    const uniqueIds = [...new Set(data.instructor)];
    const count = await instructor_model_1.default.countDocuments({
        _id: { $in: uniqueIds },
    });
    return count === uniqueIds.length;
}, {
    message: "One or more instructor IDs are invalid.",
    path: ["instructor"],
})
    .refine(async (data) => {
    const uniqueIds = [...new Set(data.category)];
    const count = await courseCategory_model_1.default.countDocuments({
        _id: { $in: uniqueIds },
    });
    return count === uniqueIds.length;
}, {
    message: "One or more category IDs are invalid.",
    path: ["category"],
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
        search: zod_1.z.string().optional(),
        sortBy: zod_1.z
            .string()
            .regex(/^[a-zA-Z_]+:(asc|desc)$/, "Sort must be in 'field:order' format, e.g., 'createdAt:desc'")
            .optional(),
        page: zod_1.z.string().optional().default("1"),
        limit: zod_1.z.string().optional().default("10"),
    }),
});
exports.getCourseSchema = zod_1.z.object({
    params: zod_1.z.object({
        courseId: zod_2.objectIdSchema,
    }),
    query: zod_1.z.object({
        content: zod_1.z
            .enum(["videos", "materials", "quizzes", "assignments"])
            .optional(),
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
        rating: zod_1.z.number().min(0).max(5).optional(),
        isActive: zod_1.z.boolean().optional(),
        instructor: zod_1.z.array(zod_2.objectIdSchema).nonempty().optional(),
        category: zod_1.z.array(zod_2.objectIdSchema).nonempty().optional(),
    })
        .refine((data) => Object.keys(data).length > 0, {
        message: "Update body cannot be empty.",
    })
        .refine(async (data) => {
        if (!data.instructor)
            return true;
        const uniqueIds = [...new Set(data.instructor)];
        const count = await instructor_model_1.default.countDocuments({
            _id: { $in: uniqueIds },
        });
        return count === uniqueIds.length;
    }, {
        message: "One or more instructor IDs are invalid.",
        path: ["instructor"],
    })
        .refine(async (data) => {
        if (!data.category)
            return true;
        const uniqueIds = [...new Set(data.category)];
        const count = await courseCategory_model_1.default.countDocuments({
            _id: { $in: uniqueIds },
        });
        return count === uniqueIds.length;
    }, { message: "One or more category IDs are invalid.", path: ["category"] }),
});
//# sourceMappingURL=course.zod.js.map