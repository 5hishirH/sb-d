"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseIdSchema = exports.updateCourseSchema = exports.getCourseSchema = exports.getAllCoursesSchema = exports.createManyCoursesWithContentSchema = exports.createCourseWithContentSchema = void 0;
const zod_1 = require("zod");
const common_schema_1 = require("../schemas/common.schema");
const instructor_model_1 = __importDefault(require("../models/instructor.model"));
const courseCategory_model_1 = __importDefault(require("../models/courseCategory.model"));
const quiz_zod_1 = require("../schemas/quiz.zod");
const quizContentBaseSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    timeLimit: zod_1.z.number().optional(),
    isAccessedByDefault: zod_1.z.boolean().default(false),
    order: zod_1.z.number({ required_error: "Order is required" }),
    questions: zod_1.z.array(quiz_zod_1.questionSchema).optional(),
});
const moduleQuizContentSchema = quizContentBaseSchema.extend({
    quizType: zod_1.z.literal("ModuleQuiz").default("ModuleQuiz"),
});
const finalQuizContentSchema = quizContentBaseSchema.extend({
    quizType: zod_1.z.literal("FinalQuiz").default("FinalQuiz"),
});
const videoSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    url: zod_1.z.string({ required_error: "Video URL is required" }).url(),
    order: zod_1.z.number({ required_error: "Video order is required" }),
    isAccessedByDefault: zod_1.z.boolean().default(false),
});
const materialSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Material title is required" }),
    description: zod_1.z.string().optional(),
    url: zod_1.z.string({ required_error: "Material URL is required" }).url(),
    order: zod_1.z.number({ required_error: "Material order is required" }),
    isAccessedByDefault: zod_1.z.boolean().default(false),
});
const assignmentSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Assignment title is required" }),
    description: zod_1.z.string().optional(),
    duration: zod_1.z.number({ required_error: "Duration is required" }),
    order: zod_1.z.number({ required_error: "Assignment order is required" }),
    isAccessedByDefault: zod_1.z.boolean().default(false),
});
const moduleSchema = zod_1.z
    .object({
    title: zod_1.z.string().optional(),
    order: zod_1.z.number({ required_error: "Module order is required" }),
    videos: zod_1.z.array(videoSchema).optional(),
    materials: zod_1.z.array(materialSchema).optional(),
    quizzes: zod_1.z.array(moduleQuizContentSchema).optional(),
})
    .refine((data) => {
    const hasContent = (data.videos && data.videos.length > 0) ||
        (data.materials && data.materials.length > 0) ||
        (data.quizzes && data.quizzes.length > 0);
    return hasContent;
}, {
    message: "A module must contain at least one video, material, or quiz.",
});
const singleCourseWithContentSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    description: zod_1.z.string().optional(),
    thumbnailUrl: zod_1.z.string().url("Thumbnail must be a valid URL").optional(),
    price: zod_1.z.number({ required_error: "Price is required" }).min(0),
    duration: zod_1.z.number({ required_error: "Course duration is required" }).min(0),
    rating: zod_1.z.number().min(0).max(5).optional(),
    instructor: zod_1.z
        .array(common_schema_1.objectIdSchema)
        .nonempty("At least one instructor is required."),
    category: zod_1.z
        .array(common_schema_1.objectIdSchema)
        .nonempty("At least one category is required."),
    modules: zod_1.z.array(moduleSchema).optional(),
    finalQuizzes: zod_1.z.array(finalQuizContentSchema).optional(),
    assignments: zod_1.z.array(assignmentSchema).optional(),
});
exports.createCourseWithContentSchema = zod_1.z
    .object({
    body: singleCourseWithContentSchema,
})
    .superRefine(async ({ body }, ctx) => {
    const instructorCheck = (async () => {
        const uniqueIds = [...new Set(body.instructor)];
        const count = await instructor_model_1.default.countDocuments({
            _id: { $in: uniqueIds },
        });
        if (count !== uniqueIds.length) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "One or more instructor IDs are invalid.",
                path: ["instructor"],
            });
        }
    })();
    const categoryCheck = (async () => {
        const uniqueIds = [...new Set(body.category)];
        const count = await courseCategory_model_1.default.countDocuments({
            _id: { $in: uniqueIds },
        });
        if (count !== uniqueIds.length) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "One or more category IDs are invalid.",
                path: ["category"],
            });
        }
    })();
    await Promise.all([instructorCheck, categoryCheck]);
});
exports.createManyCoursesWithContentSchema = zod_1.z.object({
    body: zod_1.z
        .array(singleCourseWithContentSchema)
        .nonempty("Request body must be a non-empty array of courses.")
        .refine(async (courses) => {
        const allInstructorIds = courses.flatMap((course) => course.instructor);
        const allCategoryIds = courses.flatMap((course) => course.category);
        const uniqueInstructorIds = [...new Set(allInstructorIds)];
        const uniqueCategoryIds = [...new Set(allCategoryIds)];
        const instructorValidation = instructor_model_1.default.countDocuments({
            _id: { $in: uniqueInstructorIds },
        });
        const categoryValidation = courseCategory_model_1.default.countDocuments({
            _id: { $in: uniqueCategoryIds },
        });
        const [foundInstructorsCount, foundCategoriesCount] = await Promise.all([instructorValidation, categoryValidation]);
        const areInstructorsValid = foundInstructorsCount === uniqueInstructorIds.length;
        const areCategoriesValid = foundCategoriesCount === uniqueCategoryIds.length;
        return areInstructorsValid && areCategoriesValid;
    }, {
        message: "One or more instructor or category IDs are invalid across the provided courses.",
    }),
});
exports.getAllCoursesSchema = zod_1.z.object({
    query: zod_1.z.object({
        category: common_schema_1.objectIdSchema.optional(),
        instructor: common_schema_1.objectIdSchema.optional(),
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
        courseId: common_schema_1.objectIdSchema,
    }),
    query: zod_1.z.object({
        content: zod_1.z
            .enum(["videos", "materials", "quizzes", "assignments"])
            .optional(),
    }),
});
exports.updateCourseSchema = zod_1.z.object({
    params: zod_1.z.object({
        courseId: common_schema_1.objectIdSchema,
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
        instructor: zod_1.z.array(common_schema_1.objectIdSchema).nonempty().optional(),
        category: zod_1.z.array(common_schema_1.objectIdSchema).nonempty().optional(),
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
exports.courseIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        courseId: common_schema_1.objectIdSchema,
    }),
});
//# sourceMappingURL=course.zod.js.map