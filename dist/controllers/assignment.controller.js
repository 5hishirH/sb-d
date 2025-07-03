"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssignmentById = exports.updateAssignmentById = exports.getAssignmentById = exports.getAllAssignments = exports.createManyAssignments = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const assignment_model_1 = __importDefault(require("../models/assignment.model"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.createManyAssignments = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const assignmentsToCreate = req.body;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const newAssignments = await assignment_model_1.default.create(assignmentsToCreate, {
            session,
            ordered: true,
        });
        await session.commitTransaction();
        res.status(201).json({
            success: true,
            message: `${newAssignments.length} assignments created successfully.`,
            count: newAssignments.length,
            data: newAssignments,
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
exports.getAllAssignments = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const query = req.query.module ? { module: req.query.module } : {};
    const assignments = await assignment_model_1.default.find(query);
    res.status(200).json({
        success: true,
        count: assignments.length,
        data: assignments,
    });
});
exports.getAssignmentById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await assignment_model_1.default.findById(assignmentId);
    if (!assignment) {
        throw AppError_1.AppError.notFound(`Assignment not found with id of ${assignmentId}`);
    }
    res.status(200).json({
        success: true,
        data: assignment,
    });
});
exports.updateAssignmentById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { assignmentId } = req.params;
    const updatedAssignment = await assignment_model_1.default.findByIdAndUpdate(assignmentId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedAssignment) {
        throw AppError_1.AppError.notFound(`Assignment not found with id of ${assignmentId}`);
    }
    res.status(200).json({
        success: true,
        message: "Assignment updated successfully",
        data: updatedAssignment,
    });
});
exports.deleteAssignmentById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await assignment_model_1.default.findByIdAndDelete(assignmentId);
    if (!assignment) {
        throw AppError_1.AppError.notFound(`Assignment not found with id of ${assignmentId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=assignment.controller.js.map