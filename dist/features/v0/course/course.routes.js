"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../../../middleware/validate");
const course_schema_1 = require("./course.schema");
const course_controller_1 = require("./course.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validate_1.validate)(course_schema_1.createCourseWithContentSchema), course_controller_1.createCourseWithContent);
router
    .route("/:courseId")
    .get((0, validate_1.validate)(course_schema_1.getCourseSchema), course_controller_1.getCourseWithContent);
exports.default = router;
//# sourceMappingURL=course.routes.js.map