"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseWithContent = exports.createCourseWithContent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const asyncHandler_1 = require("../../../utils/asyncHandler");
const course_model_1 = __importDefault(require("../../../models/course.model"));
const courseModule_model_1 = __importDefault(require("../../../models/courseModule.model"));
const courseVideo_model_1 = __importDefault(require("../../../models/courseVideo.model"));
const quiz_model_1 = __importDefault(require("../../../models/quiz.model"));
const material_model_1 = require("../../../features/v0/material/material.model");
const AppError_1 = require("../../../utils/AppError");
const createCourseLevelContent = async ({ courseId, finalQuizzes, finalMaterials, session, }) => {
    const contentCreationPromises = [];
    if (finalQuizzes && finalQuizzes.length > 0) {
        const quizDocs = finalQuizzes.map((q) => ({
            ...q,
            course: courseId,
            quizType: "FinalQuiz",
        }));
        contentCreationPromises.push(quiz_model_1.default.create(quizDocs, { session, ordered: true }));
    }
    if (finalMaterials && finalMaterials.length > 0) {
        const materialDocs = finalMaterials.map((m) => ({
            ...m,
            course: courseId,
            materialType: "FinalMaterial",
        }));
        contentCreationPromises.push(material_model_1.FinalMaterial.create(materialDocs, { session, ordered: true }));
    }
    if (contentCreationPromises.length > 0) {
        await Promise.all(contentCreationPromises);
    }
};
const createModuleContents = async ({ modules, courseId, session, }) => {
    if (!modules || modules.length === 0) {
        return;
    }
    for (const moduleData of modules) {
        const { videos, materials, quizzes, ...moduleCoreData } = moduleData;
        const [module] = await courseModule_model_1.default.create([{ ...moduleCoreData, course: courseId }], { session, ordered: true });
        if (!module) {
            throw AppError_1.AppError.internal("Module could not be created within the transaction.");
        }
        const moduleId = module._id;
        const contentCreationPromises = [];
        if (videos && videos.length > 0) {
            const videoDocs = videos.map((v) => ({ ...v, module: moduleId }));
            contentCreationPromises.push(courseVideo_model_1.default.create(videoDocs, { session, ordered: true }));
        }
        if (materials && materials.length > 0) {
            const materialDocs = materials.map((m) => ({
                ...m,
                module: moduleId,
                materialType: "ModuleMaterial",
            }));
            contentCreationPromises.push(material_model_1.ModuleMaterial.create(materialDocs, { session, ordered: true }));
        }
        if (quizzes && quizzes.length > 0) {
            const quizDocs = quizzes.map((q) => ({
                ...q,
                module: moduleId,
                quizType: "ModuleQuiz",
            }));
            contentCreationPromises.push(quiz_model_1.default.create(quizDocs, { session, ordered: true }));
        }
        await Promise.all(contentCreationPromises);
    }
};
exports.createCourseWithContent = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { modules, finalQuizzes, finalMaterials, ...courseData } = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const [course] = await course_model_1.default.create([courseData], { session });
        if (!course) {
            throw AppError_1.AppError.internal("Course document could not be created.");
        }
        const courseId = course._id;
        await Promise.all([
            createModuleContents({
                modules,
                courseId,
                session,
            }),
            createCourseLevelContent({
                finalQuizzes,
                finalMaterials,
                courseId,
                session,
            }),
        ]);
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: "Course and all associated content created successfully!",
            data: course,
        });
    }
    catch (error) {
        await session.abortTransaction();
        throw error;
    }
    finally {
        session.endSession();
    }
});
exports.getCourseWithContent = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const courses = await course_model_1.default.aggregate([
        { $match: { _id: new mongoose_1.default.Types.ObjectId(courseId) } },
        {
            $lookup: {
                from: "coursemodules",
                localField: "_id",
                foreignField: "course",
                as: "modules",
            },
        },
        { $unwind: { path: "$modules", preserveNullAndEmptyArrays: true } },
        { $sort: { "modules.order": 1 } },
        {
            $lookup: {
                from: "coursevideos",
                localField: "modules._id",
                foreignField: "module",
                as: "modules.videos",
            },
        },
        {
            $lookup: {
                from: "test_materials",
                localField: "modules._id",
                foreignField: "module",
                as: "modules.materials",
            },
        },
        {
            $lookup: {
                from: "quizzes",
                localField: "modules._id",
                foreignField: "module",
                as: "modules.quizzes",
            },
        },
        {
            $group: {
                _id: "$_id",
                title: { $first: "$title" },
                description: { $first: "$description" },
                price: { $first: "$price" },
                thumbnailUrl: { $first: "$thumbnailUrl" },
                videoThumbnailUrl: { $first: "$videoThumbnailUrl" },
                duration: { $first: "$duration" },
                rating: { $first: "$rating" },
                instructor: { $first: "$instructor" },
                category: { $first: "$category" },
                modules: { $push: "$modules" },
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
                ],
                as: "finalQuizzes",
            },
        },
        {
            $lookup: {
                from: "test_materials",
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
                as: "categories",
            },
        },
        {
            $project: {
                _id: 1,
                title: 1,
                description: 1,
                price: 1,
                thumbnailUrl: 1,
                videoThumbnailUrl: 1,
                duration: 1,
                rating: 1,
                instructors: 1,
                categories: 1,
                modules: {
                    _id: 1,
                    title: 1,
                    order: 1,
                    videos: 1,
                    materials: 1,
                    quizzes: 1,
                },
                finalQuizzes: 1,
                finalMaterials: 1,
            },
        },
    ]);
    if (!courses || courses.length === 0) {
        throw AppError_1.AppError.notFound("Course not found");
    }
    const course = courses[0];
    res.status(200).json({
        success: true,
        data: course,
    });
});
//# sourceMappingURL=course.controller.js.map