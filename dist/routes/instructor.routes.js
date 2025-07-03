"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const instructor_zod_1 = require("../zodSchemas/instructor.zod");
const instructor_controller_1 = require("../controllers/instructor.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validate_1.validate)(instructor_zod_1.createInstructorSchema), instructor_controller_1.createInstructor)
    .get(instructor_controller_1.getAllInstructors);
router
    .route("/bulk")
    .post((0, validate_1.validate)(instructor_zod_1.createManyInstructorSchema), instructor_controller_1.createManyInstructor);
router
    .route("/:instructorId")
    .get((0, validate_1.validate)(instructor_zod_1.getInstructorSchema), instructor_controller_1.getInstructorById)
    .put((0, validate_1.validate)(instructor_zod_1.updateInstructorSchema), instructor_controller_1.updateInstructorById)
    .delete((0, validate_1.validate)(instructor_zod_1.deleteInstructorSchema), instructor_controller_1.deleteInstructorById);
exports.default = router;
//# sourceMappingURL=instructor.routes.js.map