"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseVideoById = exports.updateCourseVideoById = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const courseVideo_model_1 = __importDefault(require("../models/courseVideo.model"));
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