"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../../../middleware/auth");
const validate_1 = require("../../../../middleware/validate");
const express_1 = require("express");
const courseProgress_validation_1 = require("../../../../features/v1/courseProgress/courseProgress.validation");
const favoriteCourse_validation_1 = require("../../../../features/v1/favoriteCourse/favoriteCourse.validation");
const course_schema_1 = require("../course.schema");
const courseProgress_controller_1 = require("../../../../features/v1/courseProgress/courseProgress.controller");
const course_controller_1 = require("../course.controller");
const favoriteCourse_controller_1 = require("../../../../features/v1/favoriteCourse/favoriteCourse.controller");
const quizAttempt_validation_1 = require("../../../../features/v1/courseProgress/quizAttempt/quizAttempt.validation");
const router = (0, express_1.Router)();
router.use(auth_1.authenticate);
router.route("/").get(courseProgress_controller_1.getCourseProgresses);
router.route("/favorites").get(favoriteCourse_controller_1.getFavoriteCourses);
router
    .route("/:courseId/videos/:videoId/complete")
    .post((0, validate_1.validate)(courseProgress_validation_1.completeVideoSchema), courseProgress_controller_1.completeVideo);
router
    .route("/:courseId/materials/:materialId/complete")
    .post((0, validate_1.validate)(courseProgress_validation_1.completeMaterialSchema), courseProgress_controller_1.completeMaterial);
router
    .route("/:courseId/quizzes/:quizId/attempt")
    .get((0, validate_1.validate)(quizAttempt_validation_1.getQuizAttemptSchema), courseProgress_controller_1.getQuizAttempt);
router
    .route("/:courseId/quizAttempts/:quizAttemptId/submit")
    .post((0, validate_1.validate)(quizAttempt_validation_1.submitQuizAttemptSchema), courseProgress_controller_1.submitQuizAttemptController);
router
    .route("/:courseId/mark-favorite")
    .post((0, validate_1.validate)(favoriteCourse_validation_1.addFavoriteMarkSchema), favoriteCourse_controller_1.addFavoriteMark);
router
    .route("/:courseId/unmark-favorite")
    .delete((0, validate_1.validate)(favoriteCourse_validation_1.addFavoriteMarkSchema), favoriteCourse_controller_1.removeFavoriteMark);
router.route("/:courseId").get((0, validate_1.validate)(course_schema_1.getCourseParams), course_controller_1.getUserCourseDetails);
exports.default = router;
//# sourceMappingURL=user.routes.js.map