"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ebook_controller_1 = require("../../../features/v1/ebook/ebook.controller");
const ebookCategory_controller_1 = require("../../../features/v1/ebookCategory/ebookCategory.controller");
const validate_1 = require("../../../middleware/validate");
const ebookCategory_zod_1 = require("../../../schemas/ebookCategory.zod");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validate_1.validate)(ebookCategory_zod_1.createEbookCategorySchema), ebook_controller_1.createEbook)
    .get(ebookCategory_controller_1.getAllEbookCategories);
router
    .route("/bulk")
    .post((0, validate_1.validate)(ebookCategory_zod_1.createManyEbookCategorySchema), ebookCategory_controller_1.createManyEbookCategories);
router
    .route("/:categoryId")
    .get((0, validate_1.validate)(ebookCategory_zod_1.getEbookCategorySchema), ebookCategory_controller_1.getEbookCategoryById)
    .put((0, validate_1.validate)(ebookCategory_zod_1.updateEbookCategorySchema), ebookCategory_controller_1.updateEbookCategory)
    .delete((0, validate_1.validate)(ebookCategory_zod_1.deleteEbookCategorySchema), ebookCategory_controller_1.deleteEbookCategory);
exports.default = router;
//# sourceMappingURL=ebookCategory.routes.js.map