"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWriterById = exports.updateWriterById = exports.getWriterById = exports.getAllWriters = exports.createManyWriters = exports.createWriter = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const writer_model_1 = __importDefault(require("../models/writer.model"));
const ebook_model_1 = __importDefault(require("../models/ebook.model"));
exports.createWriter = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newWriter = await writer_model_1.default.create(req.body);
    res.status(201).json({ success: true, data: newWriter });
});
exports.createManyWriters = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const writersToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const newWriters = await writer_model_1.default.create(writersToCreate, {
            session,
            ordered: true,
        });
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${newWriters.length} writers created successfully.`,
            count: newWriters.length,
            data: newWriters,
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
exports.getAllWriters = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const writers = await writer_model_1.default.find();
    res
        .status(200)
        .json({ success: true, count: writers.length, data: writers });
});
exports.getWriterById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { writerId } = req.params;
    const writer = await writer_model_1.default.findById(writerId);
    if (!writer) {
        throw AppError_1.AppError.notFound(`Writer not found with id of ${writerId}`);
    }
    res.status(200).json({ success: true, data: writer });
});
exports.updateWriterById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { writerId } = req.params;
    const updatedWriter = await writer_model_1.default.findByIdAndUpdate(writerId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedWriter) {
        throw AppError_1.AppError.notFound(`Writer not found with id of ${writerId}`);
    }
    res.status(200).json({ success: true, data: updatedWriter });
});
exports.deleteWriterById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { writerId } = req.params;
    const associatedEbook = await ebook_model_1.default.findOne({ writers: writerId });
    if (associatedEbook) {
        throw AppError_1.AppError.badRequest("Cannot delete writer. They are still associated with one or more ebooks.");
    }
    const writer = await writer_model_1.default.findByIdAndDelete(writerId);
    if (!writer) {
        throw AppError_1.AppError.notFound(`Writer not found with id of ${writerId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=writer.controller.js.map