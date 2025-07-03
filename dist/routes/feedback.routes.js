"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const feedback_zod_1 = require("../zodSchemas/feedback.zod");
const feedback_controller_1 = require("../controllers/feedback.controller");
const router = express_1.default.Router();
router.route("/").post((0, validate_1.validate)(feedback_zod_1.createFeedbackSchema), feedback_controller_1.createFeedback);
exports.default = router;
//# sourceMappingURL=feedback.routes.js.map