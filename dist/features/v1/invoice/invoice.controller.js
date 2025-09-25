"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const invoice_model_1 = __importDefault(require("../../../models/invoice.model"));
const AppError_1 = require("../../../utils/AppError");
const ApiResponse_1 = require("../../../utils/ApiResponse");
const courseProgress_model_1 = __importDefault(require("../../../models/courseProgress.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const course_model_1 = __importDefault(require("../../../models/course.model"));
exports.purchase = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const user = req.user;
    const { product, productType } = req.body;
    const session = await mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const alreadyPurchased = await invoice_model_1.default.exists({
            user,
            product,
        }).session(session);
        if (alreadyPurchased) {
            throw AppError_1.AppError.conflict(`The ${productType} is already purchased`);
        }
        const payload = { user: user._id, ...req.body };
        const [invoice] = await invoice_model_1.default.create([payload], { session });
        if (productType === "Course") {
            await Promise.all([
                courseProgress_model_1.default.create([{ user, course: product }], { session }),
                course_model_1.default.updateOne({ _id: product }, { $inc: { enrollmentCount: 1 } }),
            ]);
        }
        await session.commitTransaction();
        res
            .status(201)
            .json(new ApiResponse_1.ApiResponse(201, `The ${productType} is purchased successfully`, invoice, 1));
    }
    catch (error) {
        await session.abortTransaction();
        throw error;
    }
    finally {
        session.endSession();
    }
});
//# sourceMappingURL=invoice.controller.js.map