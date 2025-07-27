"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEbookById = exports.updateEbookById = exports.getEbookFileById = exports.getEbookById = exports.getAllEbooks = exports.createEbook = void 0;
const asyncHandler_1 = require("../../../utils/asyncHandler");
const ebook_model_1 = __importDefault(require("../../../models/ebook.model"));
const drive_service_1 = require("../../../services/drive.service");
const AppError_1 = require("../../../utils/AppError");
const constants_1 = require("../../../config/constants");
exports.createEbook = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const newEbook = await ebook_model_1.default.create(req.body);
    res.status(201).json({
        success: true,
        message: "Ebook created successfully",
        data: newEbook,
    });
});
exports.getAllEbooks = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { page, limit } = req.query;
    if (page && limit) {
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        const skip = (pageNumber - 1) * limitNumber;
        const [ebooks, totalEbooks] = await Promise.all([
            ebook_model_1.default.find()
                .populate({ path: "writers", select: "name" })
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limitNumber),
            ebook_model_1.default.countDocuments(),
        ]);
        return res.status(200).json({
            success: true,
            count: ebooks.length,
            pagination: {
                total: totalEbooks,
                totalPages: Math.ceil(totalEbooks / limitNumber),
                currentPage: pageNumber,
            },
            data: ebooks,
        });
    }
    const ebooks = await ebook_model_1.default.find()
        .populate({ path: "writers", select: "name" })
        .sort({ createdAt: -1 });
    return res.status(200).json({
        success: true,
        count: ebooks.length,
        data: ebooks,
    });
});
exports.getEbookById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { ebookId } = req.params;
    const ebook = await ebook_model_1.default.findById(ebookId)
        .populate({ path: "writers", select: "name" })
        .populate({ path: "publication", select: "name" });
    if (!ebook) {
        throw AppError_1.AppError.notFound(`Ebook not found with id of ${ebookId}`);
    }
    res.status(200).json({ success: true, data: ebook });
});
exports.getEbookFileById = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const { ebookId } = req.params;
    const ebook = await ebook_model_1.default.findById(ebookId).select("+googleDriveFileId +fileType");
    if (!ebook || !ebook.googleDriveFileId) {
        throw AppError_1.AppError.notFound("Ebook or file ID not found.");
    }
    const driveService = (0, drive_service_1.getDriveService)();
    const fileId = ebook.googleDriveFileId;
    const mimeType = constants_1.mimeTypeMap[ebook.fileType] || "application/octet-stream";
    res.setHeader("Content-Type", mimeType);
    res.setHeader("Content-Disposition", `inline; filename="${ebook.name}.${ebook.fileType}"`);
    const response = await driveService.files.get({ fileId: fileId, alt: "media" }, { responseType: "stream" });
    response.data
        .on("end", () => {
        console.log("File stream ended.");
        res.end();
    })
        .on("error", (err) => {
        console.error("Error streaming file from Google Drive:", err);
        next(AppError_1.AppError.internal("Error during file download."));
    })
        .pipe(res);
});
exports.updateEbookById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { ebookId } = req.params;
    const updatedEbook = await ebook_model_1.default.findByIdAndUpdate(ebookId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedEbook) {
        throw AppError_1.AppError.notFound(`Ebook not found with id of ${ebookId}`);
    }
    res.status(200).json({ success: true, data: updatedEbook });
});
exports.deleteEbookById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { ebookId } = req.params;
    const ebook = await ebook_model_1.default.findByIdAndDelete(ebookId);
    if (!ebook) {
        throw AppError_1.AppError.notFound(`Ebook not found with id of ${ebookId}`);
    }
    res.status(204).send();
});
//# sourceMappingURL=ebook.controller.js.map