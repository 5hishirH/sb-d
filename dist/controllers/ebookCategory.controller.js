"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEbookCategory = exports.updateEbookCategory = exports.getEbookCategoryById = exports.getAllEbookCategories = exports.createManyEbookCategories = exports.createEbookCategory = void 0;
const ebook_model_1 = __importDefault(require("../models/ebook.model"));
const ebookCategory_model_1 = __importDefault(require("../models/ebookCategory.model"));
const AppError_1 = require("../utils/AppError");
const asyncHandler_1 = require("../utils/asyncHandler");
const mongoose_1 = __importDefault(require("mongoose"));
exports.createEbookCategory = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newCategory = await ebookCategory_model_1.default.create(req.body);
    res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: newCategory,
    });
});
exports.createManyEbookCategories = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const categoriesToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const newCategories = await ebookCategory_model_1.default.create(categoriesToCreate, {
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
exports.getAllEbookCategories = (0, asyncHandler_1.asyncHandler)(async (_, res) => {
    const ebookCategories = await ebookCategory_model_1.default.find();
    res.status(200).json({
        success: true,
        count: ebookCategories.length,
        data: ebookCategories,
    });
});
exports.getEbookCategoryById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { categoryId } = req.params;
    const category = await ebookCategory_model_1.default.findById(categoryId);
    if (!category) {
        throw AppError_1.AppError.notFound(`Ebook Category not found with id of ${categoryId}`);
    }
    res.status(200).json({
        success: true,
        data: category,
    });
});
exports.updateEbookCategory = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { categoryId } = req.params;
    const updatedCategory = await ebookCategory_model_1.default.findByIdAndUpdate(categoryId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedCategory) {
        throw AppError_1.AppError.notFound(`Ebook Category not found with id of ${categoryId}`);
    }
    res.status(200).json({
        success: true,
        message: "Ebook Category updated successfully",
        data: updatedCategory,
    });
});
exports.deleteEbookCategory = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { categoryId } = req.params;
    const associatedEbook = await ebook_model_1.default.findOne({ categories: categoryId });
    if (associatedEbook) {
        throw AppError_1.AppError.badRequest("Cannot delete category. It is still associated with one or more ebooks.");
    }
    const category = await ebookCategory_model_1.default.findByIdAndDelete(categoryId);
    if (!category) {
        throw AppError_1.AppError.notFound(`Ebook Category not found with id of ${categoryId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=ebookCategory.controller.js.map