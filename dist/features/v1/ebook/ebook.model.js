"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ebookSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    googleDriveFileId: { type: String, required: true, select: false },
    fileType: {
        type: String,
        enum: ["pdf", "epub"],
        required: true,
        default: "pdf",
        select: false,
    },
    overview: { type: String },
    summary: { type: String },
    language: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    categories: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "EbookCategory",
        },
    ],
    writers: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Writer",
        },
    ],
    publication: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Publication",
    },
}, { timestamps: true });
const Ebook = (0, mongoose_1.model)("Ebook", ebookSchema);
exports.default = Ebook;
//# sourceMappingURL=ebook.model.js.map