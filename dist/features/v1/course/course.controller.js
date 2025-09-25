"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseAndContents = exports.updateCourseById = exports.activateCourse = exports.getFirstCourseVideo = exports.getCourseContentCount = exports.getPublicCourseDetails = exports.getUserCourseDetails = exports.getCourseWithContent = exports.getAllCourses = exports.createManyCoursesWithContent = exports.createCourseWithContent = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const AppError_1 = require("../../../utils/AppError");
const mongoose_1 = __importDefault(require("mongoose"));
const course_model_1 = __importDefault(require("../../../models/course.model"));
const courseModule_model_1 = __importDefault(require("../../../models/courseModule.model"));
const courseVideo_model_1 = __importDefault(require("../../../models/courseVideo.model"));
const material_model_1 = __importDefault(require("../../../models/material.model"));
const assignment_model_1 = __importDefault(require("../../../models/assignment.model"));
const quiz_model_1 = __importDefault(require("../../../models/quiz.model"));
const ApiResponse_1 = require("../../../utils/ApiResponse");
const courseProgress_service_1 = require("../courseProgress/courseProgress.service");
const course_service_1 = require("./course.service");
const createCourseLevelContent = async ({ courseId, finalQuizzes, assignments, session, }) => {
    const contentCreationPromises = [];
    if (finalQuizzes && finalQuizzes.length > 0) {
        const quizDocs = finalQuizzes.map((q) => ({
            ...q,
            course: courseId,
            quizType: "FinalQuiz",
        }));
        contentCreationPromises.push(quiz_model_1.default.create(quizDocs, { session, ordered: true }));
    }
    if (assignments && assignments.length > 0) {
        const assignmentDocs = assignments.map((a) => ({
            ...a,
            course: courseId,
        }));
        contentCreationPromises.push(assignment_model_1.default.create(assignmentDocs, { session, ordered: true }));
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
            const materialDocs = materials.map((m) => ({ ...m, module: moduleId }));
            contentCreationPromises.push(material_model_1.default.create(materialDocs, { session, ordered: true }));
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
    const { modules, finalQuizzes, assignments, ...courseData } = req.body;
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
                assignments,
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
exports.createManyCoursesWithContent = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const coursesToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const courseDocuments = coursesToCreate.map(({ modules, finalQuizzes, assignments, ...courseData }) => courseData);
        const createdCourses = await course_model_1.default.create(courseDocuments, {
            session,
            ordered: true,
        });
        const contentCreationPromises = createdCourses.map((course, index) => {
            const originalCourseData = coursesToCreate[index];
            const courseId = course._id;
            return Promise.all([
                createModuleContents({
                    modules: originalCourseData?.modules,
                    courseId,
                    session,
                }),
                createCourseLevelContent({
                    finalQuizzes: originalCourseData?.finalQuizzes,
                    assignments: originalCourseData?.assignments,
                    courseId,
                    session,
                }),
            ]);
        });
        await Promise.all(contentCreationPromises);
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${createdCourses.length} courses and their content created successfully!`,
            data: createdCourses,
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
exports.getAllCourses = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { category, instructor, search, sortBy, page, limit } = req.query;
    const filter = {};
    if (category) {
        filter.category = category;
    }
    if (instructor) {
        filter.instructor = instructor;
    }
    if (search) {
        filter.$text = { $search: search };
    }
    const sortOptions = {
        createdAt: "desc",
    };
    if (sortBy) {
        const [field, order] = sortBy.split(":");
        if (field && (order === "asc" || order === "desc")) {
            sortOptions[field] = order;
        }
    }
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;
    const [courses, totalCourses] = await Promise.all([
        course_model_1.default.find(filter)
            .populate({ path: "instructor", select: "name" })
            .populate({ path: "category", select: "name" })
            .sort(sortOptions)
            .skip(skip)
            .limit(limitNumber)
            .lean(),
        course_model_1.default.countDocuments(filter),
    ]);
    res.status(200).json({
        success: true,
        count: courses.length,
        pagination: {
            total: totalCourses,
            totalPages: Math.ceil(totalCourses / limitNumber),
            currentPage: pageNumber,
        },
        data: courses,
    });
});
exports.getCourseWithContent = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const course = await (0, course_service_1.getCourseWithContentById)(courseId);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Course along with its contents retrieved successfully", course, 1));
});
exports.getUserCourseDetails = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { _id: userId } = req.user;
    const course = await (0, courseProgress_service_1.getCourseProgress)(userId.toString(), req.params.courseId);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Course details retrived successfully", course, 1));
});
exports.getPublicCourseDetails = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const aggregationResult = await course_model_1.default.aggregate([
        { $match: { _id: new mongoose_1.default.Types.ObjectId(courseId) } },
        {
            $lookup: {
                from: "coursemodules",
                localField: "_id",
                foreignField: "course",
                pipeline: [
                    { $sort: { order: 1 } },
                    {
                        $lookup: {
                            from: "coursevideos",
                            localField: "_id",
                            foreignField: "module",
                            pipeline: [
                                { $sort: { order: 1 } },
                                { $project: { _id: 1, title: 1, order: 1 } },
                            ],
                            as: "videos",
                        },
                    },
                    {
                        $project: {
                            _id: 1,
                            title: 1,
                            order: 1,
                            videos: 1,
                        },
                    },
                ],
                as: "modules",
            },
        },
        {
            $lookup: {
                from: "materials",
                let: { courseId: "$_id", moduleIds: "$modules._id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $or: [
                                    { $eq: ["$course", "$$courseId"] },
                                    { $in: ["$module", "$$moduleIds"] },
                                ],
                            },
                        },
                    },
                ],
                as: "materials",
            },
        },
        {
            $lookup: {
                from: "quizzes",
                let: { courseId: "$_id", moduleIds: "$modules._id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $or: [
                                    { $eq: ["$course", "$$courseId"] },
                                    { $in: ["$module", "$$moduleIds"] },
                                ],
                            },
                        },
                    },
                ],
                as: "quizzes",
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
                category: { $ifNull: [{ $first: "$categoryDetails" }, null] },
                instructors: "$instructorDetails",
                contentCount: {
                    videos: {
                        $sum: {
                            $map: {
                                input: "$modules",
                                as: "module",
                                in: { $size: "$$module.videos" },
                            },
                        },
                    },
                    materials: { $size: "$materials" },
                    quizzes: { $size: "$quizzes" },
                    modules: { $size: "$modules" },
                },
                modules: "$modules",
            },
        },
    ]);
    if (!aggregationResult || aggregationResult.length === 0) {
        throw AppError_1.AppError.notFound("Course not found.");
    }
    const courseDetails = aggregationResult[0];
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, `Public details for course ${courseId} retrieved successfully`, courseDetails));
});
exports.getCourseContentCount = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const courseExists = await course_model_1.default.findById(courseId).lean();
    if (!courseExists) {
        throw AppError_1.AppError.notFound(`Course not found with id of ${courseId}`);
    }
    const moduleIds = await courseModule_model_1.default.find({ course: courseId }).distinct("_id");
    if (moduleIds.length === 0) {
        res.status(200).json({
            success: true,
            data: {
                videos: 0,
                materials: 0,
                assignments: 0,
                quizzes: 0,
            },
        });
    }
    const [videoCount, materialCount, assignmentCount, quizCount] = await Promise.all([
        courseVideo_model_1.default.countDocuments({ module: { $in: moduleIds } }),
        material_model_1.default.countDocuments({ module: { $in: moduleIds } }),
        assignment_model_1.default.countDocuments({ course: { $in: moduleIds } }),
        quiz_model_1.default.countDocuments({ module: { $in: moduleIds } }),
    ]);
    res.status(200).json({
        success: true,
        data: {
            videos: videoCount,
            materials: materialCount,
            assignments: assignmentCount,
            quizzes: quizCount,
        },
    });
});
exports.getFirstCourseVideo = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const courseExists = await course_model_1.default.findById(courseId).lean();
    if (!courseExists) {
        throw AppError_1.AppError.notFound(`Course not found with id of ${courseId}`);
    }
    const result = await courseModule_model_1.default.aggregate([
        {
            $match: {
                course: new mongoose_1.default.Types.ObjectId(courseId),
            },
        },
        {
            $lookup: {
                from: "coursevideos",
                localField: "_id",
                foreignField: "module",
                as: "videos",
            },
        },
        {
            $unwind: "$videos",
        },
        {
            $sort: {
                order: 1,
                "videos.order": 1,
            },
        },
        {
            $limit: 1,
        },
        {
            $replaceRoot: { newRoot: "$videos" },
        },
    ]);
    const firstVideo = result[0];
    if (!firstVideo) {
        throw AppError_1.AppError.notFound("No videos found in this course.");
    }
    res.status(200).json({
        success: true,
        data: firstVideo,
    });
});
exports.activateCourse = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const activatedCourse = await course_model_1.default.findByIdAndUpdate(courseId, { isActive: true }, { new: true, runValidators: true });
    if (!activatedCourse) {
        throw AppError_1.AppError.notFound(`Course not found with id of ${courseId}`);
    }
    res.status(200).json({
        success: true,
        message: "Course has been activated successfully.",
        data: activatedCourse,
    });
});
exports.updateCourseById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const updatedCourse = await course_model_1.default.findByIdAndUpdate(courseId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedCourse) {
        throw AppError_1.AppError.notFound(`Course not found with id of ${courseId}`);
    }
    const resData = {
        ...updatedCourse.toJSON(),
        category: updatedCourse["category"][0]?.toString(),
    };
    res.status(200).json({
        success: true,
        message: "Course updated successfully",
        data: resData,
    });
});
exports.deleteCourseAndContents = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const course = await course_model_1.default.findById(courseId).session(session);
        if (!course) {
            throw AppError_1.AppError.notFound(`Course not found with id of ${courseId}`);
        }
        const modules = await courseModule_model_1.default.find({ course: courseId }).session(session);
        if (modules.length > 0) {
            const moduleIds = modules.map((m) => m._id);
            await Promise.all([
                courseVideo_model_1.default.deleteMany({ module: { $in: moduleIds } }).session(session),
                material_model_1.default.deleteMany({ module: { $in: moduleIds } }).session(session),
                assignment_model_1.default.deleteMany({ course: { $in: moduleIds } }).session(session),
                quiz_model_1.default.deleteMany({ module: { $in: moduleIds } }).session(session),
            ]);
            await courseModule_model_1.default.deleteMany({ course: courseId }).session(session);
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