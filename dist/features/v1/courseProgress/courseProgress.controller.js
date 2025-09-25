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
exports.getCourseProgresses = exports.submitQuizAttemptController = exports.getQuizAttempt = exports.completeMaterial = exports.completeVideo = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const courseProgress_model_1 = __importDefault(require("../../../models/courseProgress.model"));
const AppError_1 = require("../../../utils/AppError");
const ApiResponse_1 = require("../../../utils/ApiResponse");
const courseProgress_service_1 = require("./courseProgress.service");
const material_model_1 = __importDefault(require("../../../models/material.model"));
const quizAttempt_service_1 = require("./quizAttempt/quizAttempt.service");
const mongoose_1 = __importStar(require("mongoose"));
exports.completeVideo = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const dbSession = await mongoose_1.default.startSession();
    dbSession.startTransaction();
    try {
        const { _id: userId } = req.user;
        const { courseId, videoId } = req.params;
        const updateResult = await courseProgress_model_1.default.updateOne({
            user: userId,
            course: courseId,
        }, {
            $addToSet: { completedVideos: videoId },
        }, {
            session: dbSession,
        });
        if (updateResult.matchedCount === 0) {
            throw new AppError_1.AppError(403, "Access denied. You are not enrolled in this course.");
        }
        if (updateResult.modifiedCount === 0) {
            throw new AppError_1.AppError(409, "This video has already been marked as completed.");
        }
        const userIdString = userId.toString();
        const course = await (0, courseProgress_service_1.getCourseProgress)(userIdString, courseId, dbSession);
        const progressPercentage = (0, courseProgress_service_1.calcProgressPercent)(course);
        await courseProgress_model_1.default.updateOne({
            user: userId,
            course: courseId,
        }, {
            progressPercentage,
        }).session(dbSession);
        await dbSession.commitTransaction();
        return res.status(200).json(new ApiResponse_1.ApiResponse(200, "Video marked as complete.", {
            ...course,
            progressPercentage,
        }));
    }
    catch (error) {
        await dbSession.abortTransaction();
        throw error;
    }
    finally {
        dbSession.endSession();
    }
});
exports.completeMaterial = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const dbSession = await mongoose_1.default.startSession();
    dbSession.startTransaction();
    try {
        const { _id: userId } = req.user;
        const { courseId, materialId } = req.params;
        const material = await material_model_1.default.findById(materialId)
            .select("materialType")
            .session(dbSession);
        if (!material) {
            throw AppError_1.AppError.badRequest("Material with the requested id does not exist");
        }
        const updatePayload = material.materialType === "ModuleMaterial"
            ? { completedModuleMaterials: materialId }
            : { completedFinalMaterials: materialId };
        const updateResult = await courseProgress_model_1.default.updateOne({
            user: userId,
            course: courseId,
        }, {
            $addToSet: updatePayload,
        }).session(dbSession);
        if (updateResult.matchedCount === 0) {
            throw AppError_1.AppError.forbidden("Access denied. You are not enrolled in this course.");
        }
        if (updateResult.modifiedCount === 0) {
            throw AppError_1.AppError.conflict("This material has already been marked as completed.");
        }
        const userIdString = userId.toString();
        const course = await (0, courseProgress_service_1.getCourseProgress)(userIdString, courseId, dbSession);
        const progressPercentage = (0, courseProgress_service_1.calcProgressPercent)(course);
        await courseProgress_model_1.default.updateOne({
            user: userId,
            course: courseId,
        }, {
            progressPercentage,
        }).session(dbSession);
        await dbSession.commitTransaction();
        res.status(200).json(new ApiResponse_1.ApiResponse(200, "Material is marked as complete.", {
            ...course,
            progressPercentage,
        }));
    }
    catch (error) {
        await dbSession.abortTransaction();
        throw error;
    }
    finally {
        dbSession.endSession();
    }
});
exports.getQuizAttempt = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = req.user["_id"];
    const courseId = req.params["courseId"];
    const userHasCourse = await courseProgress_model_1.default.exists({
        user: userId,
        course: courseId,
    });
    if (!userHasCourse) {
        throw AppError_1.AppError.unauthorized("Access denied. You are not enrolled in this course.");
    }
    const quizId = req.params["quizId"];
    const randomizedQuiz = await (0, quizAttempt_service_1.createQuizAttempt)(userId, new mongoose_1.Types.ObjectId(quizId));
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Quiz retrived successfully", randomizedQuiz));
});
exports.submitQuizAttemptController = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { _id: userId } = req.user;
    const { quizAttemptId, courseId } = req.params;
    const { answers, submittedAt } = req.body;
    const dbSession = await mongoose_1.default.startSession();
    dbSession.startTransaction();
    try {
        const userEnrolledCourse = await courseProgress_model_1.default.findOne({
            user: userId,
            course: courseId,
        }).session(dbSession);
        if (!userEnrolledCourse) {
            throw AppError_1.AppError.forbidden("Access denied. You are not enrolled in this course.");
        }
        const submittedQuizAttempt = await (0, quizAttempt_service_1.submitQuizAttemptService)(quizAttemptId, userId, answers, submittedAt, dbSession);
        const { _id: quizId, quizType } = submittedQuizAttempt.quiz;
        if (quizType === "ModuleQuiz") {
            await courseProgress_model_1.default.updateOne({ user: userId, course: courseId }, {
                $addToSet: { completedModuleQuizzes: quizId },
            }).session(dbSession);
        }
        else if (quizType === "FinalQuiz") {
            await courseProgress_model_1.default.updateOne({ user: userId, course: courseId }, {
                $addToSet: { completedFinalQuizzes: quizId },
            }).session(dbSession);
        }
        await dbSession.commitTransaction();
        res
            .status(200)
            .json(new ApiResponse_1.ApiResponse(200, "Quiz Submitted Successfully", submittedQuizAttempt, 1));
    }
    catch (error) {
        await dbSession.abortTransaction();
        throw error;
    }
    finally {
        dbSession.endSession();
    }
});
exports.getCourseProgresses = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = req.user["_id"];
    const query = req.query["filter"];
    const filterPayload = query
        ? { user: userId, progressPercentage: 100 }
        : { user: userId };
    const dataPipeline = [
        {
            $match: filterPayload,
        },
        {
            $lookup: {
                from: "courses",
                localField: "course",
                foreignField: "_id",
                as: "courseDetails",
            },
        },
        {
            $unwind: "$courseDetails",
        },
        {
            $lookup: {
                from: "instructors",
                localField: "courseDetails.instructor",
                foreignField: "_id",
                as: "instructors",
            },
        },
        {
            $sort: {
                updatedAt: -1,
            },
        },
        {
            $project: {
                _id: "$courseDetails._id",
                title: "$courseDetails.title",
                thumbnailUrl: "$courseDetails.thumbnailUrl",
                instructors: {
                    $map: {
                        input: "$instructors",
                        as: "instructor",
                        in: {
                            _id: "$$instructor._id",
                            name: "$$instructor.name",
                        },
                    },
                },
                progress: "$progressPercentage",
                updatedAt: 1,
                createdAt: 1,
            },
        },
    ];
    const courseProgresses = await courseProgress_model_1.default.aggregate(dataPipeline);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, `All ${query ? `${query} ` : ""}enrolled courses are retrived successfully`, courseProgresses, courseProgresses.length));
});
//# sourceMappingURL=courseProgress.controller.js.map