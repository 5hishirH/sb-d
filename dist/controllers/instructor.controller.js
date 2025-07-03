"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInstructorById = exports.updateInstructorById = exports.getInstructorById = exports.getAllInstructors = exports.createManyInstructor = exports.createInstructor = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const instructor_model_1 = __importDefault(require("../models/instructor.model"));
const course_model_1 = __importDefault(require("../models/course.model"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.createInstructor = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newInstructor = await instructor_model_1.default.create(req.body);
    res.status(201).json({
        success: true,
        message: "Instructor created successfully",
        data: newInstructor,
    });
});
exports.createManyInstructor = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const instructorsToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const newInstructors = await instructor_model_1.default.create(instructorsToCreate, {
            session,
            ordered: true,
        });
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${newInstructors.length} instructors created successfully.`,
            count: newInstructors.length,
            data: newInstructors,
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
exports.getAllInstructors = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const instructors = await instructor_model_1.default.find();
    res.status(200).json({
        success: true,
        count: instructors.length,
        data: instructors,
    });
});
exports.getInstructorById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { instructorId } = req.params;
    const instructor = await instructor_model_1.default.findById(instructorId);
    if (!instructor) {
        throw AppError_1.AppError.notFound(`Instructor not found with id of ${instructorId}`);
    }
    res.status(200).json({
        success: true,
        data: instructor,
    });
});
exports.updateInstructorById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { instructorId } = req.params;
    const updatedInstructor = await instructor_model_1.default.findByIdAndUpdate(instructorId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedInstructor) {
        throw AppError_1.AppError.notFound(`Instructor not found with id of ${instructorId}`);
    }
    res.status(200).json({
        success: true,
        message: "Instructor updated successfully",
        data: updatedInstructor,
    });
});
exports.deleteInstructorById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { instructorId } = req.params;
    const associatedCourse = await course_model_1.default.findOne({ instructor: instructorId });
    if (associatedCourse) {
        throw AppError_1.AppError.badRequest("Cannot delete instructor. The instructor is still associated with one or more courses.");
    }
    const instructor = await instructor_model_1.default.findByIdAndDelete(instructorId);
    if (!instructor) {
        throw AppError_1.AppError.notFound(`Instructor not found with id of ${instructorId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=instructor.controller.js.map