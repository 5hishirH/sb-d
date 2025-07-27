"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUserById = exports.getUsers = void 0;
const user_model_1 = require("../../../models/user.model");
const AppError_1 = require("../../../utils/AppError");
const asyncHandler_1 = require("../../../utils/asyncHandler");
exports.getUsers = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { page, limit, search, role, sortBy, sortOrder } = req.query;
    const query = { isActive: true };
    if (search) {
        query.$or = [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
        ];
    }
    if (role) {
        query.role = role;
    }
    const skip = (page - 1) * limit;
    const sort = {};
    sort[sortBy] = sortOrder === "asc" ? 1 : -1;
    const [users, total] = await Promise.all([
        user_model_1.User.find(query).sort(sort).skip(skip).limit(limit).lean(),
        user_model_1.User.countDocuments(query),
    ]);
    const totalPages = Math.ceil(total / limit);
    res.status(200).json({
        success: true,
        message: "Users retrieved successfully",
        data: {
            users,
            pagination: {
                currentPage: page,
                totalPages,
                totalItems: total,
                itemsPerPage: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
        },
    });
});
exports.getUserById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    const user = await user_model_1.User.findById(id);
    if (!user || !user.isActive) {
        throw AppError_1.AppError.notFound("User not found");
    }
    res.status(200).json({
        success: true,
        message: "User retrieved successfully",
        data: { user },
    });
});
exports.deleteUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    const user = await user_model_1.User.findById(id);
    if (!user || !user.isActive) {
        throw AppError_1.AppError.notFound("User not found");
    }
    await user_model_1.User.findByIdAndUpdate(id, { isActive: false });
    res.status(200).json({
        success: true,
        message: "User deleted successfully",
    });
});
//# sourceMappingURL=user.controller.js.map