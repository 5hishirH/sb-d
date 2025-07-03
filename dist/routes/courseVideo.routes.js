"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const courseVideo_zod_1 = require("../zodSchemas/courseVideo.zod");
const courseVideo_controller_1 = require("../controllers/courseVideo.controller");
const router = express_1.default.Router();
router.route("/bulk").post((0, validate_1.validate)(courseVideo_zod_1.createManyVideosSchema), courseVideo_controller_1.createManyVideos);
router
    .route("/:videoId")
    .get((0, validate_1.validate)(courseVideo_zod_1.deleteCourseVideoSchema), courseVideo_controller_1.getVideoById)
    .put((0, validate_1.validate)(courseVideo_zod_1.updateCourseVideoSchema), courseVideo_controller_1.updateCourseVideoById)
    .delete((0, validate_1.validate)(courseVideo_zod_1.deleteCourseVideoSchema), courseVideo_controller_1.deleteCourseVideoById);
exports.default = router;
//# sourceMappingURL=courseVideo.routes.js.map