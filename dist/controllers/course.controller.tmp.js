"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseAndContents = exports.updateCourseById = exports.activateCourse = exports.getFirstCourseVideo = exports.getCourseContentCount = exports.getCourseWithContent = exports.getAllCourses = exports.createManyCoursesWithContent = exports.createCourseWithContent = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const mongoose_1 = __importDefault(require("mongoose"));
const course_model_1 = __importDefault(require("../models/course.model"));
const courseModule_model_1 = __importDefault(require("../models/courseModule.model"));
const courseVideo_model_1 = __importDefault(require("../models/courseVideo.model"));
const material_model_1 = __importDefault(require("../models/material.model"));
const assignment_model_1 = __importDefault(require("../models/assignment.model"));
const quiz_model_1 = __importDefault(require("../models/quiz.model"));
const createCourseContents = async ({ modules, courseId, session, }) => {
    if (!modules || modules.length === 0) {
        return;
    }
    for (const moduleData of modules) {
        const { videos, materials, quizzes, assignments, ...moduleCoreData } = moduleData;
        const [module] = await courseModule_model_1.default.create([{ ...moduleCoreData, course: courseId }], { session });
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
            const quizDocs = quizzes.map((q) => ({ ...q, module: moduleId }));
            contentCreationPromises.push(quiz_model_1.default.create(quizDocs, { session, ordered: true }));
        }
        if (assignments && assignments.length > 0) {
            const assignmentDocs = assignments.map((a) => ({
                ...a,
                module: moduleId,
            }));
            contentCreationPromises.push(assignment_model_1.default.create(assignmentDocs, { session, ordered: true }));
        }
        await Promise.all(contentCreationPromises);
    }
};
exports.createCourseWithContent = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { modules, ...courseData } = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const [course] = await course_model_1.default.create([courseData], { session });
        if (!course) {
            throw AppError_1.AppError.internal("Course document could not be created.");
        }
        await createCourseContents({
            modules,
            courseId: course._id,
            session,
        });
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: "Course, modules, and content created successfully!",
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
        const createdCourses = [];
        for (const courseData of coursesToCreate) {
            const { modules, ...topLevelCourseData } = courseData;
            const [course] = await course_model_1.default.create([topLevelCourseData], { session });
            if (!course) {
                throw AppError_1.AppError.internal("A course document could not be created.");
            }
            await createCourseContents({
                modules,
                courseId: course._id,
                session,
            });
            createdCourses.push(course);
        }
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${createdCourses.length} courses created successfully!`,
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
    if (category)
        filter.category = category;
    if (instructor)
        filter.instructor = instructor;
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
    const { content } = req.query;
    const courseExists = await course_model_1.default.findById(courseId).lean();
    if (!courseExists) {
        throw AppError_1.AppError.notFound(`Course not found with id of ${courseId}`);
    }
    const moduleIds = await courseModule_model_1.default.find({ course: courseId }).distinct("_id");
    if (content) {
        let data = [];
        const filter = { module: { $in: moduleIds } };
        switch (content) {
            case "videos":
                data = await courseVideo_model_1.default.find(filter).sort({ order: "asc" });
                break;
            case "materials":
                data = await material_model_1.default.find(filter).sort({ order: "asc" });
                break;
            case "quizzes":
                data = await quiz_model_1.default.find(filter).sort({ order: "asc" });
                break;
            case "assignments":
                data = await assignment_model_1.default.find(filter).sort({ order: "asc" });
                break;
        }
        return res.status(200).json({
            success: true,
            count: data.length,
            data: data,
        });
    }
    const course = courseExists;
    const modules = await courseModule_model_1.default.find({ course: courseId })
        .sort({ order: "asc" })
        .lean();
    const [videos, materials, quizzes, assignments] = await Promise.all([
        courseVideo_model_1.default.find({ module: { $in: moduleIds } })
            .sort({ order: "asc" })
            .lean(),
        material_model_1.default.find({ module: { $in: moduleIds } })
            .sort({ order: "asc" })
            .lean(),
        quiz_model_1.default.find({ module: { $in: moduleIds } })
            .sort({ order: "asc" })
            .lean(),
        assignment_model_1.default.find({ module: { $in: moduleIds } })
            .sort({ order: "asc" })
            .lean(),
    ]);
    const contentByModule = new Map();
    videos.forEach((v) => {
        const id = v.module.toString();
        if (!contentByModule.has(id))
            contentByModule.set(id, { videos: [] });
        contentByModule.get(id).videos.push(v);
    });
    materials.forEach((m) => {
        const id = m.module.toString();
        if (!contentByModule.has(id))
            contentByModule.set(id, { materials: [] });
        if (!contentByModule.get(id).materials)
            contentByModule.get(id).materials = [];
        contentByModule.get(id).materials.push(m);
    });
    quizzes.forEach((q) => {
        const id = q.module.toString();
        if (!contentByModule.has(id))
            contentByModule.set(id, { quizzes: [] });
        if (!contentByModule.get(id).quizzes)
            contentByModule.get(id).quizzes = [];
        contentByModule.get(id).quizzes.push(q);
    });
    assignments.forEach((a) => {
        const id = a.module.toString();
        if (!contentByModule.has(id))
            contentByModule.set(id, { assignments: [] });
        if (!contentByModule.get(id).assignments)
            contentByModule.get(id).assignments = [];
        contentByModule.get(id).assignments.push(a);
    });
    const populatedModules = modules.map((module) => {
        const moduleIdString = module._id.toString();
        const content = contentByModule.get(moduleIdString) || {};
        return {
            ...module,
            videos: content.videos || [],
            materials: content.materials || [],
            quizzes: content.quizzes || [],
            assignments: content.assignments || [],
        };
    });
    const finalResponse = {
        ...course,
        modules: populatedModules,
    };
    return res.status(200).json({
        success: true,
        data: finalResponse,
    });
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
        assignment_model_1.default.countDocuments({ module: { $in: moduleIds } }),
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
    res.status(200).json({
        success: true,
        message: "Course updated successfully",
        data: updatedCourse,
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
                assignment_model_1.default.deleteMany({ module: { $in: moduleIds } }).session(session),
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
//# sourceMappingURL=course.controller.tmp.js.map