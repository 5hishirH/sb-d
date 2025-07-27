"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../../../middleware/validate");
const ebook_zod_1 = require("../../../schemas/ebook.zod");
const ebook_controller_1 = require("../../../features/v1/ebook/ebook.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validate_1.validate)(ebook_zod_1.createEbookSchema), ebook_controller_1.createEbook)
    .get((0, validate_1.validate)(ebook_zod_1.getAllEbooksSchema), ebook_controller_1.getAllEbooks);
router
    .route("/:ebookId")
    .get((0, validate_1.validate)(ebook_zod_1.getEbookSchema), ebook_controller_1.getEbookById)
    .put((0, validate_1.validate)(ebook_zod_1.getEbookSchema), ebook_controller_1.updateEbookById)
    .delete((0, validate_1.validate)(ebook_zod_1.getEbookSchema), ebook_controller_1.deleteEbookById);
router
    .route("/:ebookId/download")
    .get((0, validate_1.validate)(ebook_zod_1.getEbookFileSchema), ebook_controller_1.getEbookFileById);
exports.default = router;
//# sourceMappingURL=ebook.routes.js.map