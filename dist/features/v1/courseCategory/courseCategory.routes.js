"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../../../middleware/validate");
const courseCategory_zod_1 = require("../../../schemas/courseCategory.zod");
const courseCategory_controller_1 = require("../../../features/v1/courseCategory/courseCategory.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validate_1.validate)(courseCategory_zod_1.createCourseCategorySchema), courseCategory_controller_1.createCourseCategory)
    .get(courseCategory_controller_1.getAllCourseCategories);
router
    .route("/bulk")
    .post((0, validate_1.validate)(courseCategory_zod_1.createManyCourseCategorySchema), courseCategory_controller_1.createManyCategories);
router
    .route("/:categoryId")
    .get((0, validate_1.validate)(courseCategory_zod_1.getCourseCategorySchema), courseCategory_controller_1.getCourseCategoryById)
    .put((0, validate_1.validate)(courseCategory_zod_1.updateCourseCategorySchema), courseCategory_controller_1.updateCourseCategoryById)
    .delete((0, validate_1.validate)(courseCategory_zod_1.deleteCourseCategorySchema), courseCategory_controller_1.deleteCourseCategoryById);
exports.default = router;
//# sourceMappingURL=courseCategory.routes.js.map