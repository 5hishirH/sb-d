"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const quiz_zod_1 = require("../zodSchemas/quiz.zod");
const quiz_controller_1 = require("../controllers/quiz.controller");
const router = express_1.default.Router();
router
    .route("/bulk")
    .post((0, validate_1.validate)(quiz_zod_1.createManyQuizzesSchema), quiz_controller_1.createManyQuizzes);
router
    .route("/:quizId")
    .get((0, validate_1.validate)(quiz_zod_1.getQuizSchema), quiz_controller_1.getQuizById)
    .put((0, validate_1.validate)(quiz_zod_1.updateQuizSchema), quiz_controller_1.updateQuizWithQuestions)
    .delete((0, validate_1.validate)(quiz_zod_1.deleteQuizSchema), quiz_controller_1.deleteQuizWithQuestions);
router
    .route("/:quizId/questions/:questionId")
    .delete((0, validate_1.validate)(quiz_zod_1.deleteQuestionSchema), quiz_controller_1.deleteQuestionById);
exports.default = router;
//# sourceMappingURL=quiz.routes.js.map