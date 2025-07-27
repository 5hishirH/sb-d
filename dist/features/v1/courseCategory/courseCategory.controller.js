"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseCategoryById = exports.updateCourseCategoryById = exports.getCourseCategoryById = exports.getAllCourseCategories = exports.createManyCategories = exports.createCourseCategory = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const AppError_1 = require("../../../utils/AppError");
const courseCategory_model_1 = __importDefault(require("../../../models/courseCategory.model"));
const course_model_1 = __importDefault(require("../../../models/course.model"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.createCourseCategory = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newCategory = await courseCategory_model_1.default.create(req.body);
    res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: newCategory,
    });
});
exports.createManyCategories = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const categoriesToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const newCategories = await courseCategory_model_1.default.create(categoriesToCreate, {
            session,
            ordered: true,
        });
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${newCategories.length} course categories created successfully.`,
            count: newCategories.length,
            data: newCategories,
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
exports.getAllCourseCategories = (0, asyncHandler_1.asyncHandler)(async (_, res) => {
    const categories = await courseCategory_model_1.default.find();
    res.status(200).json({
        success: true,
        count: categories.length,
        data: categories,
    });
});
exports.getCourseCategoryById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { categoryId } = req.params;
    const category = await courseCategory_model_1.default.findById(categoryId);
    if (!category) {
        throw AppError_1.AppError.notFound(`Category not found with id of ${categoryId}`);
    }
    res.status(200).json({
        success: true,
        data: category,
    });
});
exports.updateCourseCategoryById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { categoryId } = req.params;
    const updatedCategory = await courseCategory_model_1.default.findByIdAndUpdate(categoryId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedCategory) {
        throw AppError_1.AppError.notFound(`Category not found with id of ${categoryId}`);
    }
    res.status(200).json({
        success: true,
        message: "Category updated successfully",
        data: updatedCategory,
    });
});
exports.deleteCourseCategoryById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { categoryId } = req.params;
    const associatedCourse = await course_model_1.default.findOne({ category: categoryId });
    if (associatedCourse) {
        throw AppError_1.AppError.badRequest("Cannot delete category. It is still associated with one or more courses.");
    }
    const category = await courseCategory_model_1.default.findByIdAndDelete(categoryId);
    if (!category) {
        throw AppError_1.AppError.notFound(`Category not found with id of ${categoryId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=courseCategory.controller.js.map