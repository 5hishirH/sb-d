"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFavoriteMark = exports.getFavoriteCourses = exports.addFavoriteMark = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const favoriteCourse_model_1 = require("../../../models/favoriteCourse.model");
const AppError_1 = require("../../../utils/AppError");
const ApiResponse_1 = require("../../../utils/ApiResponse");
exports.addFavoriteMark = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const filterQuery = {
        user: req.user._id,
        course: req.params["courseId"],
    };
    const isMarked = await favoriteCourse_model_1.FavoriteCourse.exists(filterQuery);
    if (isMarked) {
        throw AppError_1.AppError.badRequest("Course is already marked favorite.");
    }
    await favoriteCourse_model_1.FavoriteCourse.create(filterQuery);
    res
        .status(201)
        .json(new ApiResponse_1.ApiResponse(201, "The course is marked as favorite."));
});
exports.getFavoriteCourses = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = req.user["_id"];
    const pipeline = [
        { $match: { user: userId } },
        {
            $lookup: {
                from: "courses",
                localField: "course",
                foreignField: "_id",
                as: "courseDetails",
            },
        },
        {
            $unwind: "$courseDetails",
        },
        {
            $project: {
                courseId: "$courseDetails._id",
                courseName: "$courseDetails.title",
            },
        },
    ];
    const favoriteCourses = await favoriteCourse_model_1.FavoriteCourse.aggregate(pipeline);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Favorite courses retrived successfully.", favoriteCourses, favoriteCourses.length));
});
exports.removeFavoriteMark = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const filterQuery = {
        user: req.user._id,
        course: req.params["courseId"],
    };
    const isMarked = await favoriteCourse_model_1.FavoriteCourse.exists(filterQuery);
    if (!isMarked) {
        throw AppError_1.AppError.badRequest("Course is already unmarked favorite.");
    }
    await favoriteCourse_model_1.FavoriteCourse.deleteOne({ _id: isMarked._id });
    res.sendStatus(203);
});
//# sourceMappingURL=favoriteCourse.controller.js.map