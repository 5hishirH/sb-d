"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseVideoById = exports.updateCourseVideoById = exports.getVideoById = exports.createManyVideos = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const courseVideo_model_1 = __importDefault(require("../models/courseVideo.model"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.createManyVideos = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const videosToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const newVideos = await courseVideo_model_1.default.create(videosToCreate, {
            session,
            ordered: true,
        });
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${newVideos.length} videos created successfully.`,
            count: newVideos.length,
            data: newVideos,
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
exports.getVideoById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { videoId } = req.params;
    const video = await courseVideo_model_1.default.findById(videoId);
    if (!video) {
        throw AppError_1.AppError.notFound(`Video not found with id of ${videoId}`);
    }
    res.status(200).json({
        success: true,
        data: video,
    });
});
exports.updateCourseVideoById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { videoId } = req.params;
    const updatedVideo = await courseVideo_model_1.default.findByIdAndUpdate(videoId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedVideo) {
        throw AppError_1.AppError.notFound(`Video not found with id of ${videoId}`);
    }
    res.status(200).json({
        success: true,
        message: "Video updated successfully",
        data: updatedVideo,
    });
});
exports.deleteCourseVideoById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { videoId } = req.params;
    const video = await courseVideo_model_1.default.findByIdAndDelete(videoId);
    if (!video) {
        throw AppError_1.AppError.notFound(`Video not found with id of ${videoId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=courseVideo.controller.js.map