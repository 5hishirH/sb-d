"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcProgressPercent = exports.getCourseProgress = exports.getCourseWithContentById = void 0;
const course_model_1 = __importDefault(require("../../../models/course.model"));
const courseProgress_model_1 = __importDefault(require("../../../models/courseProgress.model"));
const AppError_1 = require("../../../utils/AppError");
const mongoose_1 = require("mongoose");
const getCourseWithContentById = async (courseId, dbSession) => {
    const dataPipeline = [
        { $match: { _id: new mongoose_1.Types.ObjectId(courseId) } },
        {
            $lookup: {
                from: "coursemodules",
                localField: "_id",
                foreignField: "course",
                as: "modules",
            },
        },
        { $unwind: { path: "$modules", preserveNullAndEmptyArrays: true } },
        {
            $lookup: {
                from: "coursevideos",
                localField: "modules._id",
                foreignField: "module",
                pipeline: [
                    { $sort: { order: 1 } },
                ],
                as: "modules.videos",
            },
        },
        {
            $lookup: {
                from: "materials",
                localField: "modules._id",
                foreignField: "module",
                pipeline: [
                    { $sort: { order: 1 } },
                ],
                as: "modules.materials",
            },
        },
        {
            $lookup: {
                from: "quizzes",
                localField: "modules._id",
                foreignField: "module",
                pipeline: [
                    { $sort: { order: 1 } },
                    { $project: { questions: 0 } },
                ],
                as: "modules.quizzes",
            },
        },
        { $sort: { "modules.order": 1 } },
        {
            $group: {
                _id: "$_id",
                doc: { $first: "$$ROOT" },
                modules: { $push: "$modules" },
            },
        },
        {
            $replaceRoot: {
                newRoot: { $mergeObjects: ["$doc", { modules: "$modules" }] },
            },
        },
        {
            $lookup: {
                from: "materials",
                let: { courseId: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: { $eq: ["$course", "$$courseId"] },
                            materialType: "FinalMaterial",
                        },
                    },
                    { $sort: { order: 1 } },
                ],
                as: "finalMaterials",
            },
        },
        {
            $lookup: {
                from: "quizzes",
                let: { courseId: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: { $eq: ["$course", "$$courseId"] },
                            quizType: "FinalQuiz",
                        },
                    },
                    { $sort: { order: 1 } },
                    { $project: { questions: 0 } },
                ],
                as: "finalQuizzes",
            },
        },
        {
            $lookup: {
                from: "instructors",
                localField: "instructor",
                foreignField: "_id",
                as: "instructors",
            },
        },
        {
            $lookup: {
                from: "coursecategories",
                localField: "category",
                foreignField: "_id",
                as: "category",
            },
        },
        {
            $project: {
                _id: 1,
                title: 1,
                description: 1,
                price: 1,
                discountPercentage: 1,
                enrollmentCount: 1,
                thumbnailUrl: 1,
                videoThumbnailUrl: 1,
                duration: 1,
                rating: 1,
                modules: 1,
                finalQuizzes: 1,
                finalMaterials: 1,
                instructors: 1,
                category: { $first: "$category" },
            },
        },
    ];
    const courses = dbSession
        ? await course_model_1.default.aggregate(dataPipeline).session(dbSession)
        : await course_model_1.default.aggregate(dataPipeline);
    if (!courses || courses.length === 0) {
        throw AppError_1.AppError.notFound("Course not found");
    }
    const course = courses[0];
    if (course.modules && course.modules.length === 1 && !course.modules[0]._id) {
        course.modules = [];
    }
    return course;
};
exports.getCourseWithContentById = getCourseWithContentById;
const processContentAccessibility = (items, completedIds, initialAccessibility, propsToNullify) => {
    let isPreviousItemComplete = initialAccessibility;
    for (const item of items) {
        item.isCompleted = completedIds.has(item._id.toString());
        item.isAccessible = isPreviousItemComplete;
        if (!item.isAccessible) {
            for (const prop of propsToNullify) {
                item[prop] = null;
            }
        }
        isPreviousItemComplete = item.isCompleted;
    }
    return isPreviousItemComplete;
};
const getCourseProgress = async (userId, courseId, dbSession) => {
    const [course, progress] = dbSession
        ? await Promise.all([
            (0, exports.getCourseWithContentById)(courseId, dbSession),
            courseProgress_model_1.default.findOne({ user: userId, course: courseId })
                .session(dbSession)
                .lean(),
        ])
        : await Promise.all([
            (0, exports.getCourseWithContentById)(courseId),
            courseProgress_model_1.default.findOne({ user: userId, course: courseId }).lean(),
        ]);
    if (!progress) {
        throw AppError_1.AppError.forbidden("Access denied. You are not enrolled in this course.");
    }
    const completedVideos = new Set(progress.completedVideos.map(String));
    const completedModuleMaterials = new Set(progress.completedModuleMaterials.map(String));
    const completedModuleQuizzes = new Set(progress.completedModuleQuizzes.map(String));
    let isPreviousItemComplete = true;
    for (const module of course.modules) {
        if (module.videos) {
            isPreviousItemComplete = processContentAccessibility(module.videos, completedVideos, isPreviousItemComplete, ["url", "description"]);
        }
        if (module.materials) {
            isPreviousItemComplete = processContentAccessibility(module.materials, completedModuleMaterials, isPreviousItemComplete, ["url", "description"]);
        }
        if (module.quizzes) {
            isPreviousItemComplete = processContentAccessibility(module.quizzes, completedModuleQuizzes, isPreviousItemComplete, ["timeLimit", "questions"]);
        }
    }
    if (course.finalMaterials) {
        isPreviousItemComplete = processContentAccessibility(course.finalMaterials, completedModuleMaterials, isPreviousItemComplete, ["url", "description"]);
    }
    if (course.finalQuizzes) {
        processContentAccessibility(course.finalQuizzes, completedModuleQuizzes, isPreviousItemComplete, ["timeLimit", "questions"]);
    }
    return course;
};
exports.getCourseProgress = getCourseProgress;
const calcProgressPercent = (course) => {
    let totalItems = 0;
    let completedItems = 0;
    course.modules.forEach((module) => {
        totalItems +=
            (module.videos?.length || 0) +
                (module.materials?.length || 0) +
                (module.quizzes?.length || 0);
        completedItems +=
            (module.videos?.filter((video) => video.isCompleted).length || 0) +
                (module.materials?.filter((material) => material.isCompleted).length ||
                    0) +
                (module.quizzes?.filter((quiz) => quiz.isCompleted).length || 0);
    });
    totalItems +=
        (course.finalMaterials?.length || 0) + (course.finalQuizzes?.length || 0);
    completedItems +=
        (course.finalMaterials?.filter((material) => material.isCompleted).length ||
            0) +
            (course.finalQuizzes?.filter((quiz) => quiz.isCompleted).length || 0);
    const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
    return progressPercentage;
};
exports.calcProgressPercent = calcProgressPercent;
//# sourceMappingURL=courseProgress.service.js.map