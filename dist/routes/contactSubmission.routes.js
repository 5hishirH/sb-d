"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const contactSubmission_zod_1 = require("../zodSchemas/contactSubmission.zod");
const contactSubmission_controller_1 = require("../controllers/contactSubmission.controller");
const router = express_1.default.Router();
router.route("/").post((0, validate_1.validate)(contactSubmission_zod_1.createContactSubmissionSchema), contactSubmission_controller_1.createContactSubmission);
exports.default = router;
//# sourceMappingURL=contactSubmission.routes.js.map