"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../../../middleware/validate");
const course_zod_1 = require("../../../schemas/course.zod");
const course_controller_1 = require("../../../features/v1/course/course.controller");
const course_schema_1 = require("../../../features/v0/course/course.schema");
const course_controller_2 = require("../../../features/v0/course/course.controller");
const course_service_1 = require("./course.service");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validate_1.validate)(course_schema_1.createCourseWithContentSchema), course_controller_2.createCourseWithContent)
    .get((0, validate_1.validate)(course_zod_1.getAllCoursesSchema), course_controller_2.getAllCourses);
router
    .route("/:courseId")
    .get((0, validate_1.validate)(course_schema_1.getCourseSchema), course_controller_1.getCourseWithContent)
    .put((0, validate_1.validate)(course_schema_1.updateCourseContentSchema), course_service_1.updateCourseContent)
    .delete((0, validate_1.validate)(course_schema_1.getCourseSchema), course_controller_2.deleteCourseWithContents);
router
    .route("/:courseId/meta")
    .put((0, validate_1.validate)(course_schema_1.updateCourseSchema), course_controller_1.updateCourseById);
router
    .route("/:courseId/public")
    .get((0, validate_1.validate)(course_schema_1.getCourseSchema), course_controller_1.getPublicCourseDetails);
router
    .route("/:courseId/activate")
    .patch((0, validate_1.validate)(course_schema_1.getCourseSchema), course_controller_1.activateCourse);
router
    .route("/:courseId/content-count")
    .get((0, validate_1.validate)(course_schema_1.getCourseSchema), course_controller_2.getCourseContentCount);
router
    .route("/:courseId/first-video")
    .get((0, validate_1.validate)(course_schema_1.getCourseSchema), course_controller_1.getFirstCourseVideo);
exports.default = router;
//# sourceMappingURL=course.routes.js.map