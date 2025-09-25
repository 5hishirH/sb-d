"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoupon = exports.makeCouponUniversal = exports.addItemsToCoupon = exports.updateCouponById = exports.getCouponsForEbook = exports.getCouponsForCourse = exports.getAllCoupons = exports.createCoupon = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const ApiResponse_1 = require("../../../utils/ApiResponse");
const AppError_1 = require("../../../utils/AppError");
const coupon_model_1 = __importDefault(require("../../../models/coupon.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const createCoupon = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newCoupon = await coupon_model_1.default.create(req.body);
    res
        .status(201)
        .json(new ApiResponse_1.ApiResponse(201, `Requested coupon is created successfully`, newCoupon, 1));
});
exports.createCoupon = createCoupon;
const getAllCoupons = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const pipeline = [
        {
            $match: {
                expiry: { $gt: new Date() },
            },
        },
        {
            $unwind: {
                path: "$appliesTo",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $lookup: {
                from: "courses",
                localField: "appliesTo.itemId",
                foreignField: "_id",
                as: "courseInfo",
            },
        },
        {
            $lookup: {
                from: "ebooks",
                localField: "appliesTo.itemId",
                foreignField: "_id",
                as: "ebookInfo",
            },
        },
        {
            $addFields: {
                "appliesTo.itemName": {
                    $ifNull: [
                        { $arrayElemAt: ["$courseInfo.title", 0] },
                        { $arrayElemAt: ["$ebookInfo.name", 0] },
                    ],
                },
            },
        },
        {
            $group: {
                _id: "$_id",
                code: { $first: "$code" },
                discountPercentage: { $first: "$discountPercentage" },
                expiry: { $first: "$expiry" },
                couponType: { $first: "$couponType" },
                createdAt: { $first: "$createdAt" },
                appliesTo: { $push: "$appliesTo" },
            },
        },
        {
            $sort: {
                createdAt: -1,
            },
        },
        {
            $project: {
                _id: 1,
                code: 1,
                discountPercentage: 1,
                expiry: 1,
                couponType: 1,
                appliesTo: {
                    $cond: {
                        if: { $eq: ["$couponType", "Universal"] },
                        then: [],
                        else: "$appliesTo",
                    },
                },
            },
        },
    ];
    const coupons = await coupon_model_1.default.aggregate(pipeline);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "All valid (not expired) coupons retrieved successfully", coupons, coupons.length));
});
exports.getAllCoupons = getAllCoupons;
const getCouponsForCourse = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { courseId } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(courseId)) {
        throw AppError_1.AppError.badRequest("Invalid course ID format.");
    }
    const pipeline = [
        {
            $match: {
                expiry: { $gt: new Date() },
                $or: [
                    { couponType: "Universal" },
                    {
                        couponType: "Exclusive",
                        appliesTo: {
                            $elemMatch: {
                                itemType: "Course",
                                itemId: new mongoose_1.default.Types.ObjectId(courseId),
                            },
                        },
                    },
                ],
            },
        },
        {
            $project: {
                _id: 1,
                code: 1,
                discountPercentage: 1,
                expiry: 1,
                couponType: 1,
            },
        },
    ];
    const coupons = await coupon_model_1.default.aggregate(pipeline);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Coupons retrieved successfully", coupons, coupons.length));
});
exports.getCouponsForCourse = getCouponsForCourse;
const getCouponsForEbook = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { ebookId } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(ebookId)) {
        throw AppError_1.AppError.badRequest("Invalid course ID format.");
    }
    const pipeline = [
        {
            $match: {
                expiry: { $gt: new Date() },
                $or: [
                    { couponType: "Universal" },
                    {
                        couponType: "Exclusive",
                        appliesTo: {
                            $elemMatch: {
                                itemType: "Ebook",
                                itemId: new mongoose_1.default.Types.ObjectId(ebookId),
                            },
                        },
                    },
                ],
            },
        },
        {
            $project: {
                _id: 1,
                code: 1,
                discountPercentage: 1,
                expiry: 1,
            },
        },
    ];
    const coupons = await coupon_model_1.default.aggregate(pipeline);
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Coupons retrieved successfully", coupons, coupons.length));
});
exports.getCouponsForEbook = getCouponsForEbook;
const updateCouponById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const updatePayload = { ...req.body };
    const updateOperation = {};
    if (updatePayload.appliesTo !== undefined) {
        if (updatePayload.appliesTo.length > 0) {
            updatePayload.couponType = "Exclusive";
        }
        else {
            updatePayload.couponType = "Universal";
            delete updatePayload.appliesTo;
            updateOperation.$unset = { appliesTo: "" };
        }
    }
    updateOperation.$set = updatePayload;
    const updatedCoupon = await coupon_model_1.default.findByIdAndUpdate(req.params.couponId, updateOperation, { new: true });
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Coupon updated successfully", updatedCoupon, 1));
});
exports.updateCouponById = updateCouponById;
const addItemsToCoupon = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { couponId } = req.params;
    const { items } = req.body;
    const updatedCoupon = await coupon_model_1.default.findByIdAndUpdate(couponId, {
        $set: { couponType: "Exclusive" },
        $addToSet: { appliesTo: { $each: items } },
    }, {
        new: true,
        runValidators: true,
    });
    if (!updatedCoupon) {
        throw new AppError_1.AppError(404, "Coupon not found.");
    }
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Items added to coupon successfully", updatedCoupon));
});
exports.addItemsToCoupon = addItemsToCoupon;
const makeCouponUniversal = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { couponId } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(couponId)) {
        throw new AppError_1.AppError(400, "Invalid coupon ID format.");
    }
    const updatedCoupon = await coupon_model_1.default.findByIdAndUpdate(couponId, {
        $set: { couponType: "Universal" },
        $unset: { appliesTo: "" },
    }, {
        new: true,
    });
    if (!updatedCoupon) {
        throw new AppError_1.AppError(404, "Coupon not found.");
    }
    res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "Coupon successfully updated to Universal", updatedCoupon));
});
exports.makeCouponUniversal = makeCouponUniversal;
const deleteCoupon = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { couponId } = req.params;
    const couponExists = await coupon_model_1.default.exists({ _id: couponId });
    if (!couponExists) {
        throw AppError_1.AppError.badRequest("No coupon with the request id exists");
    }
    await coupon_model_1.default.deleteOne({ _id: couponExists._id });
    res.status(204).send();
});
exports.deleteCoupon = deleteCoupon;
//# sourceMappingURL=coupon.controller.js.map