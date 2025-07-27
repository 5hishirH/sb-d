"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEbookFileByIdGCM = void 0;
const constants_1 = require("../../../config/constants");
const env_1 = require("../../../config/env");
const ebook_model_1 = __importDefault(require("../../../models/ebook.model"));
const drive_service_1 = require("../../../services/drive.service");
const AppError_1 = require("../../../utils/AppError");
const asyncHandler_1 = require("../../../utils/asyncHandler");
const crypto_1 = __importDefault(require("crypto"));
exports.getEbookFileByIdGCM = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const { ebookId } = req.params;
    const ebook = await ebook_model_1.default.findById(ebookId).select("+googleDriveFileId +fileType");
    if (!ebook || !ebook.googleDriveFileId) {
        throw AppError_1.AppError.notFound("Ebook or file ID not found.");
    }
    const driveService = (0, drive_service_1.getDriveService)();
    const fileId = ebook.googleDriveFileId;
    const encryptionKey = Buffer.from(env_1.env.FILE_ENCRYPTION_KEY_HEX, "hex");
    const iv = crypto_1.default.randomBytes(12);
    const cipher = crypto_1.default.createCipheriv("aes-256-gcm", encryptionKey, iv);
    const mimeType = constants_1.mimeTypeMap[ebook.fileType] || "application/octet-stream";
    res.setHeader("Content-Type", mimeType);
    res.setHeader("Content-Disposition", `attachment; filename="${ebook.name}.encrypted"`);
    res.setHeader("X-Encryption-IV", iv.toString("hex"));
    try {
        const response = await driveService.files.get({ fileId: fileId, alt: "media" }, { responseType: "stream" });
        res.write(iv);
        response.data
            .pipe(cipher)
            .on("end", () => {
            const authTag = cipher.getAuthTag();
            res.write(authTag);
            console.log("Encrypted file stream with auth tag ended.");
            res.end();
        })
            .on("error", (err) => {
            console.error("Error during GCM encryption:", err);
            next(AppError_1.AppError.internal("Error during file encryption."));
        })
            .pipe(res, { end: false });
    }
    catch (error) {
        console.error("Error streaming file from Google Drive:", error);
        next(AppError_1.AppError.internal("Error during file download."));
    }
});
//# sourceMappingURL=ebook.controller.js.map