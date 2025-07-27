"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMaterialById = exports.updateMaterialById = exports.getMaterialById = exports.createManyMaterials = void 0;
const asyncHandler_1 = require("../../../../../utils/asyncHandler");
const AppError_1 = require("../../../../../utils/AppError");
const material_model_1 = __importDefault(require("../../../../../models/material.model"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.createManyMaterials = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const materialsToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const newMaterials = await material_model_1.default.create(materialsToCreate, {
            session,
            ordered: true,
        });
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${newMaterials.length} materials created successfully.`,
            count: newMaterials.length,
            data: newMaterials,
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
exports.getMaterialById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { materialId } = req.params;
    const material = await material_model_1.default.findById(materialId);
    if (!material) {
        throw AppError_1.AppError.notFound(`Material not found with id of ${materialId}`);
    }
    res.status(200).json({
        success: true,
        data: material,
    });
});
exports.updateMaterialById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { materialId } = req.params;
    const updatedMaterial = await material_model_1.default.findByIdAndUpdate(materialId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedMaterial) {
        throw AppError_1.AppError.notFound(`Material not found with id of ${materialId}`);
    }
    res.status(200).json({
        success: true,
        message: "Material updated successfully",
        data: updatedMaterial,
    });
});
exports.deleteMaterialById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { materialId } = req.params;
    const material = await material_model_1.default.findByIdAndDelete(materialId);
    if (!material) {
        throw AppError_1.AppError.notFound(`Material not found with id of ${materialId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=material.controller.js.map