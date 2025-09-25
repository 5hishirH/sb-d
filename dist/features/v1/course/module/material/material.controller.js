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
exports.deleteMaterialById = exports.reorderModuleMaterials = exports.reorderFinalMaterials = exports.updateMaterialById = exports.getMaterialById = exports.createFinalMaterial = exports.createModuleMaterial = exports.createManyMaterials = void 0;
const asyncHandler_1 = require("../../../../../utils/asyncHandler");
const AppError_1 = require("../../../../../utils/AppError");
const material_model_1 = __importStar(require("../../../../../models/material.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const ApiResponse_1 = require("../../../../../utils/ApiResponse");
const common_service_1 = require("../../../../../features/v1/common.service");
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
exports.createModuleMaterial = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const dbSession = await mongoose_1.default.startSession();
    dbSession.startTransaction();
    try {
        const { moduleId } = req.params;
        const materialToCreate = req.body;
        const materialCount = await material_model_1.ModuleMaterial.countDocuments({ module: moduleId }, {
            session: dbSession,
        });
        let newMaterial;
        if (materialToCreate.order <= materialCount) {
            await material_model_1.ModuleMaterial.updateMany({
                module: moduleId,
                order: { $gte: materialToCreate.order },
            }, {
                $inc: {
                    order: 1,
                },
            }, {
                session: dbSession,
            });
            newMaterial = await material_model_1.ModuleMaterial.create([
                {
                    ...materialToCreate,
                    module: moduleId,
                },
            ], {
                session: dbSession,
                new: true,
            });
        }
        else {
            newMaterial = await material_model_1.ModuleMaterial.create([
                {
                    ...materialToCreate,
                    module: moduleId,
                    order: materialCount + 1,
                },
            ], {
                session: dbSession,
                new: true,
            });
        }
        await dbSession.commitTransaction();
        res
            .status(201)
            .json(new ApiResponse_1.ApiResponse(201, `New module is created successfully.`, newMaterial[0], 1));
    }
    catch (error) {
        await dbSession.abortTransaction();
        throw error;
    }
    finally {
        await dbSession.endSession();
    }
});
exports.createFinalMaterial = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const dbSession = await mongoose_1.default.startSession();
    dbSession.startTransaction();
    try {
        const { courseId } = req.params;
        const materialToCreate = req.body;
        const materialCount = await material_model_1.FinalMaterial.countDocuments({ course: courseId }, {
            session: dbSession,
        });
        let newMaterial;
        if (materialToCreate.order <= materialCount) {
            await material_model_1.FinalMaterial.updateMany({
                course: courseId,
                order: { $gte: materialToCreate.order },
            }, {
                $inc: {
                    order: 1,
                },
            }, {
                session: dbSession,
            });
            newMaterial = await material_model_1.FinalMaterial.create([
                {
                    ...materialToCreate,
                    course: courseId,
                },
            ], {
                session: dbSession,
                new: true,
            });
        }
        else {
            newMaterial = await material_model_1.FinalMaterial.create([
                {
                    ...materialToCreate,
                    course: courseId,
                    order: materialCount + 1,
                },
            ], {
                session: dbSession,
                new: true,
            });
        }
        await dbSession.commitTransaction();
        res
            .status(201)
            .json(new ApiResponse_1.ApiResponse(201, `New course material is created successfully.`, newMaterial[0], 1));
    }
    catch (error) {
        await dbSession.abortTransaction();
        throw error;
    }
    finally {
        await dbSession.endSession();
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
exports.reorderFinalMaterials = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { orderedIds } = req.body;
    const { courseId } = req.params;
    const result = await (0, common_service_1.reorderService)({
        modelName: "Material",
        parentField: "course",
        parentId: courseId,
        orderedIds: orderedIds,
    });
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Materials are reordered successfully.", result));
});
exports.reorderModuleMaterials = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { orderedIds } = req.body;
    const { moduleId } = req.params;
    const result = await (0, common_service_1.reorderService)({
        modelName: "Material",
        parentField: "module",
        parentId: moduleId,
        orderedIds: orderedIds,
    });
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Materials are reordered successfully.", result));
});
exports.deleteMaterialById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { materialId } = req.params;
    const dbSession = await mongoose_1.default.startSession();
    dbSession.startTransaction();
    try {
        const material = await material_model_1.default.findById(materialId).session(dbSession);
        if (!material) {
            throw AppError_1.AppError.notFound(`Material not found with id of ${materialId}`);
        }
        const orderToUpdateFrom = material.order;
        let updateFilter;
        if (material.materialType === "ModuleMaterial") {
            updateFilter = {
                module: material.module,
                order: { $gt: orderToUpdateFrom },
            };
        }
        else {
            updateFilter = {
                course: material.course,
                order: { $gt: orderToUpdateFrom },
            };
        }
        await material_model_1.default.updateMany(updateFilter, { $inc: { order: -1 } }, { session: dbSession });
        await material.deleteOne({ session: dbSession });
        await dbSession.commitTransaction();
        res.status(204).send();
    }
    catch (error) {
        await dbSession.abortTransaction();
        throw error;
    }
    finally {
        dbSession.endSession();
    }
});
//# sourceMappingURL=material.controller.js.map