"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const courseModule_zod_1 = require("../zodSchemas/courseModule.zod");
const courseModule_controller_1 = require("../controllers/courseModule.controller");
const router = express_1.default.Router();
router.route("/").post((0, validate_1.validate)(courseModule_zod_1.createModuleSchema), courseModule_controller_1.createModuleWithoutContent);
router
    .route("/:moduleId")
    .put((0, validate_1.validate)(courseModule_zod_1.updateModuleSchema), courseModule_controller_1.updateModule)
    .delete((0, validate_1.validate)(courseModule_zod_1.deleteModuleSchema), courseModule_controller_1.deleteModuleAndContents);
exports.default = router;
//# sourceMappingURL=courseModule.routes.js.map