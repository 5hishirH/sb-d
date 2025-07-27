"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModuleAndContents = exports.updateModule = exports.createModuleWithoutContent = void 0;
const asyncHandler_1 = require("../../../../utils/asyncHandler");
const courseModule_model_1 = __importDefault(require("../../../../models/courseModule.model"));
const AppError_1 = require("../../../../utils/AppError");
const mongoose_1 = __importDefault(require("mongoose"));
const courseVideo_model_1 = __importDefault(require("../../../../models/courseVideo.model"));
const material_model_1 = __importDefault(require("../../../../models/material.model"));
const assignment_model_1 = __importDefault(require("../../../../models/assignment.model"));
const quiz_model_1 = __importDefault(require("../../../../models/quiz.model"));
exports.createModuleWithoutContent = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newModule = await courseModule_model_1.default.create(req.body);
    res.status(201).json({
        success: true,
        message: "Module created successfully",
        data: newModule,
    });
});
exports.updateModule = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { moduleId } = req.params;
    const updatedModule = await courseModule_model_1.default.findByIdAndUpdate(moduleId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedModule) {
        throw AppError_1.AppError.notFound(`Module not found with id of ${moduleId}`);
    }
    res.status(200).json({
        success: true,
        message: "Module updated successfully",
        data: updatedModule,
    });
});
exports.deleteModuleAndContents = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { moduleId } = req.params;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const module = await courseModule_model_1.default.findById(moduleId).session(session);
        if (!module) {
            throw AppError_1.AppError.notFound(`Module not found with id of ${moduleId}`);
        }
        await Promise.all([
            courseVideo_model_1.default.deleteMany({ module: moduleId }).session(session),
            material_model_1.default.deleteMany({ module: moduleId }).session(session),
            assignment_model_1.default.deleteMany({ course: moduleId }).session(session),
            quiz_model_1.default.deleteMany({ module: moduleId }).session(session),
        ]);
        await courseModule_model_1.default.findByIdAndDelete(moduleId).session(session);
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
//# sourceMappingURL=courseModule.controller.js.map