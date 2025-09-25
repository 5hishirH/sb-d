"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseWithContentById = exports.updateCourseContent = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const asyncHandler_1 = require("../../../utils/asyncHandler");
const AppError_1 = require("../../../utils/AppError");
const course_model_1 = __importDefault(require("../../../models/course.model"));
const courseModule_model_1 = __importDefault(require("../../../models/courseModule.model"));
const courseVideo_model_1 = __importDefault(require("../../../models/courseVideo.model"));
const quiz_model_1 = __importDefault(require("../../../models/quiz.model"));
const material_model_1 = require("../../../models/material.model");
const reconcileCollection = async (model, parentId, parentField, existingItems, desiredItems, session) => {
    const existingIds = new Set(existingItems.map((item) => item._id.toString()));
    const desiredIds = new Set(desiredItems.filter((item) => item._id).map((item) => item._id));
    const toCreate = desiredItems
        .filter((item) => !item._id)
        .map((item) => ({ ...item, [parentField]: parentId }));
    const toDelete = Array.from(existingIds).filter((id) => !desiredIds.has(id));
    const toUpdate = desiredItems.filter((item) => item._id && existingIds.has(item._id));
    if (toCreate.length > 0) {
        await model.create(toCreate, { session });
    }
    const bulkOps = [];
    if (toDelete.length > 0) {
        bulkOps.push({
            deleteMany: { filter: { _id: { $in: toDelete } } },
        });
    }
    for (const item of toUpdate) {
        const { _id, ...updateData } = item;
        bulkOps.push({
            updateOne: { filter: { _id }, update: { $set: updateData } },
        });
    }
    if (bulkOps.length > 0) {
        await model.bulkWrite(bulkOps, { session });
    }
};
exports.updateCourseContent = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const { modules: desiredModules = [], finalQuizzes: desiredFinalQuizzes = [], finalMaterials: desiredFinalMaterials = [], } = req.body;
    const course = await course_model_1.default.findById(courseId).lean();
    if (!course) {
        throw AppError_1.AppError.notFound("Course not found.");
    }
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const courseObjectId = new mongoose_1.Types.ObjectId(courseId);
        const [existingModules, existingFinalQuizzes, existingFinalMaterials] = await Promise.all([
            courseModule_model_1.default.find({ course: courseObjectId }).session(session).lean(),
            quiz_model_1.default.find({ course: courseObjectId, quizType: "FinalQuiz" })
                .session(session)
                .lean(),
            material_model_1.FinalMaterial.find({ course: courseObjectId })
                .session(session)
                .lean(),
        ]);
        await Promise.all([
            reconcileCollection(courseModule_model_1.default, courseObjectId, "course", existingModules, desiredModules, session),
            reconcileCollection(quiz_model_1.default, courseObjectId, "course", existingFinalQuizzes, desiredFinalQuizzes, session),
            reconcileCollection(material_model_1.FinalMaterial, courseObjectId, "course", existingFinalMaterials, desiredFinalMaterials, session),
        ]);
        for (const module of desiredModules) {
            if (!module._id)
                continue;
            const moduleId = new mongoose_1.Types.ObjectId(module._id);
            const [existingVideos, existingMaterials, existingQuizzes] = await Promise.all([
                courseVideo_model_1.default.find({ module: moduleId }).session(session).lean(),
                material_model_1.ModuleMaterial.find({ module: moduleId }).session(session).lean(),
                quiz_model_1.default.find({ module: moduleId }).session(session).lean(),
            ]);
            await Promise.all([
                reconcileCollection(courseVideo_model_1.default, moduleId, "module", existingVideos, module.videos || [], session),
                reconcileCollection(material_model_1.ModuleMaterial, moduleId, "module", existingMaterials, module.materials || [], session),
                reconcileCollection(quiz_model_1.default, moduleId, "module", existingQuizzes, module.quizzes || [], session),
            ]);
        }
        await session.commitTransaction();
        res.status(200).json({
            success: true,
            message: "Course content updated successfully.",
        });
    }
    catch (error) {
        await session.abortTransaction();
        if (error instanceof AppError_1.AppError) {
            console.log("It's an instance of AppError");
        }
        throw error;
    }
    finally {
        session.endSession();
    }
});
const getCourseWithContentById = async (courseId, dbSession) => {
    const dataPipeline = [
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
//# sourceMappingURL=course.service.js.map