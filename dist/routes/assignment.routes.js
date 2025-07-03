"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const assignment_zod_1 = require("../zodSchemas/assignment.zod");
const assignment_controller_1 = require("../controllers/assignment.controller");
const router = express_1.default.Router();
router
    .route("/bulk")
    .post((0, validate_1.validate)(assignment_zod_1.createManyAssignmentsSchema), assignment_controller_1.createManyAssignments);
router
    .route("/:assignmentId")
    .get((0, validate_1.validate)(assignment_zod_1.getAssignmentSchema), assignment_controller_1.getAssignmentById)
    .put((0, validate_1.validate)(assignment_zod_1.updateAssignmentSchema), assignment_controller_1.updateAssignmentById)
    .delete((0, validate_1.validate)(assignment_zod_1.deleteAssignmentSchema), assignment_controller_1.deleteAssignmentById);
exports.default = router;
//# sourceMappingURL=assignment.routes.js.map