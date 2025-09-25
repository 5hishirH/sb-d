"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../../../../middleware/validate");
const courseModule_zod_1 = require("../../../../schemas/courseModule.zod");
const courseModule_controller_1 = require("../../../../features/v1/course/module/courseModule.controller");
const module_routes_1 = __importDefault(require("../../../../features/v1/course/module/material/routes/admin/module.routes"));
const router = (0, express_1.Router)();
router
    .route("/")
    .post((0, validate_1.validate)(courseModule_zod_1.createModuleSchema), courseModule_controller_1.createModuleWithoutContent);
router
    .route("/:moduleId")
    .put((0, validate_1.validate)(courseModule_zod_1.updateModuleSchema), courseModule_controller_1.updateModule)
    .delete((0, validate_1.validate)(courseModule_zod_1.deleteModuleSchema), courseModule_controller_1.deleteModuleAndContents);
router.use("/:moduleId/materials", module_routes_1.default);
exports.default = router;
//# sourceMappingURL=courseModule.routes.js.map