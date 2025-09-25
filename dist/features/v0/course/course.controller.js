"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseWithContents = exports.getAllCourses = exports.getCourseContentCount = exports.getCourseWithContent = exports.createCourseWithContent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const asyncHandler_1 = require("../../../utils/asyncHandler");
const course_model_1 = __importDefault(require("../../../models/course.model"));
const courseModule_model_1 = __importDefault(require("../../../models/courseModule.model"));
const courseVideo_model_1 = __importDefault(require("../../../models/courseVideo.model"));
const quiz_model_1 = __importDefault(require("../../../models/quiz.model"));
const material_model_1 = require("../../../models/material.model");
const AppError_1 = require("../../../utils/AppError");
const material_model_2 = __importDefault(require("../../../models/material.model"));
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
        const resData = {
            ...course.toJSON(),
            category: course["category"][0]?.toString(),
        };
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: "Course and all associated content created successfully!",
            data: resData,
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
                from: "materials",
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
                discountPercentage: { $first: "$discountPercentage" },
                enrollmentCount: { $first: "$enrollmentCount" },
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
                from: "instructors",
                localField: "instructor",
                foreignField: "_id",
                as: "instructorDetails",
            },
        },
        {
            $lookup: {
                from: "coursecategories",
                localField: "category",
                foreignField: "_id",
                as: "categoryDetails",
            },
        },
        {
            $project: {
                _id: 1,
                title: 1,
                description: 1,
                price: 1,
                discountPercentage: 1,
                thumbnailUrl: 1,
                videoThumbnailUrl: 1,
                enrollmentCount: 1,
                duration: 1,
                rating: 1,
                instructor: {
                    $map: {
                        input: "$instructorDetails",
                        as: "i",
                        in: { _id: "$$i._id", name: "$$i.name" },
                    },
                },
                category: {
                    $let: {
                        vars: {
                            firstCat: { $first: "$categoryDetails" },
                        },
                        in: {
                            $cond: {
                                if: "$$firstCat",
                                then: {
                                    _id: "$$firstCat._id",
                                    name: "$$firstCat.name",
                                    iconUrl: "$$firstCat.iconUrl",
                                },
                                else: null,
                            },
                        },
                    },
                },
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
        message: `${courseId} retrieved successfully`,
        data: course,
    });
});
exports.getCourseContentCount = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const result = await course_model_1.default.aggregate([
        { $match: { _id: new mongoose_1.default.Types.ObjectId(courseId) } },
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
                    { $count: "count" },
                ],
                as: "finalQuizCount",
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
                    { $count: "count" },
                ],
                as: "finalMaterialCount",
            },
        },
        {
            $lookup: {
                from: "coursemodules",
                let: { courseId: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$course", "$$courseId"] } } },
                    { $count: "count" },
                ],
                as: "moduleCount",
            },
        },
        {
            $lookup: {
                from: "coursemodules",
                let: { courseId: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$course", "$$courseId"] } } },
                    {
                        $lookup: {
                            from: "coursevideos",
                            localField: "_id",
                            foreignField: "module",
                            as: "videos",
                        },
                    },
                    {
                        $lookup: {
                            from: "materials",
                            localField: "_id",
                            foreignField: "module",
                            as: "materials",
                        },
                    },
                    {
                        $lookup: {
                            from: "quizzes",
                            localField: "_id",
                            foreignField: "module",
                            as: "quizzes",
                        },
                    },
                    {
                        $group: {
                            _id: null,
                            totalVideos: { $sum: { $size: "$videos" } },
                            totalMaterials: { $sum: { $size: "$materials" } },
                            totalQuizzes: { $sum: { $size: "$quizzes" } },
                        },
                    },
                ],
                as: "moduleContentCounts",
            },
        },
        {
            $project: {
                _id: 0,
                modules: {
                    $ifNull: [{ $first: "$moduleCount.count" }, 0],
                },
                videos: {
                    $ifNull: [{ $first: "$moduleContentCounts.totalVideos" }, 0],
                },
                materials: {
                    $add: [
                        {
                            $ifNull: [{ $first: "$moduleContentCounts.totalMaterials" }, 0],
                        },
                        {
                            $ifNull: [{ $first: "$finalMaterialCount.count" }, 0],
                        },
                    ],
                },
                quizzes: {
                    $add: [
                        {
                            $ifNull: [{ $first: "$moduleContentCounts.totalQuizzes" }, 0],
                        },
                        { $ifNull: [{ $first: "$finalQuizCount.count" }, 0] },
                    ],
                },
            },
        },
    ]);
    if (!result || result.length === 0) {
        throw AppError_1.AppError.notFound("Course not found or has no content to count.");
    }
    res.status(200).json({
        success: true,
        data: result[0],
    });
});
exports.getAllCourses = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { category, instructor, search, sortBy, page, limit } = req.query;
    const filter = {};
    if (category) {
        filter.category = new mongoose_1.default.Types.ObjectId(category);
    }
    if (instructor) {
        filter.instructor = new mongoose_1.default.Types.ObjectId(instructor);
    }
    if (search) {
        filter.$text = { $search: search };
    }
    const sortOptions = { createdAt: -1 };
    if (sortBy) {
        const [field, order] = sortBy.split(":");
        if (field && (order === "asc" || order === "desc")) {
            sortOptions[field] = order === "asc" ? 1 : -1;
        }
    }
    const pageNumber = page ? parseInt(page, 10) : 0;
    const limitNumber = limit ? parseInt(limit, 10) : 0;
    const hasPagination = pageNumber > 0 && limitNumber > 0;
    const dataPipeline = [{ $sort: sortOptions }];
    if (hasPagination) {
        const skip = (pageNumber - 1) * limitNumber;
        dataPipeline.push({ $skip: skip }, { $limit: limitNumber });
    }
    dataPipeline.push({
        $lookup: {
            from: "instructors",
            localField: "instructor",
            foreignField: "_id",
            as: "instructor",
        },
    }, {
        $lookup: {
            from: "coursecategories",
            localField: "category",
            foreignField: "_id",
            as: "category",
        },
    }, {
        $project: {
            title: 1,
            description: 1,
            price: 1,
            discountPercentage: 1,
            thumbnailUrl: 1,
            duration: 1,
            enrollmentCount: 1,
            rating: 1,
            instructor: {
                $map: {
                    input: "$instructor",
                    as: "i",
                    in: { _id: "$$i._id", name: "$$i.name" },
                },
            },
            category: {
                $let: {
                    vars: {
                        firstCat: { $first: "$category" },
                    },
                    in: {
                        $cond: {
                            if: "$$firstCat",
                            then: {
                                _id: "$$firstCat._id",
                                name: "$$firstCat.name",
                                iconUrl: "$$firstCat.iconUrl",
                            },
                            else: null,
                        },
                    },
                },
            },
        },
    });
    const aggregationResult = await course_model_1.default.aggregate([
        { $match: filter },
        {
            $facet: {
                metadata: [{ $count: "total" }],
                data: dataPipeline,
            },
        },
    ]);
    const courses = aggregationResult[0].data;
    const totalCourses = aggregationResult[0].metadata[0]?.total || 0;
    const paginationResponse = { total: totalCourses };
    if (hasPagination) {
        paginationResponse.totalPages = Math.ceil(totalCourses / limitNumber);
        paginationResponse.currentPage = pageNumber;
    }
    res.status(200).json({
        success: true,
        count: courses.length,
        pagination: paginationResponse,
        data: courses,
    });
});
exports.deleteCourseWithContents = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const course = await course_model_1.default.findById(courseId).session(session).lean();
        if (!course) {
            throw AppError_1.AppError.notFound("Course not found.");
        }
        const modules = await courseModule_model_1.default.find({ course: courseId })
            .session(session)
            .lean();
        const moduleIds = modules.map((m) => m._id);
        const deletionPromises = [];
        if (moduleIds.length > 0) {
            deletionPromises.push(courseVideo_model_1.default.deleteMany({ module: { $in: moduleIds } }).session(session));
        }
        deletionPromises.push(material_model_2.default.deleteMany({
            $or: [{ module: { $in: moduleIds } }, { course: courseId }],
        }).session(session));
        deletionPromises.push(quiz_model_1.default.deleteMany({
            $or: [{ module: { $in: moduleIds } }, { course: courseId }],
        }).session(session));
        await Promise.all(deletionPromises);
        if (moduleIds.length > 0) {
            await courseModule_model_1.default.deleteMany({ _id: { $in: moduleIds } }).session(session);
        }
        await course_model_1.default.findByIdAndDelete(courseId).session(session);
        await session.commitTransaction();
        res.status(204).send();
    }
    catch (error) {
        await session.abortTransaction();
        throw error;
    }
    finally {
        session.endSession();
    }
});
//# sourceMappingURL=course.controller.js.map