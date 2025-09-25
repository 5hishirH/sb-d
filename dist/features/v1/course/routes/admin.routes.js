"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseModule_routes_1 = __importDefault(require("../../../../features/v1/course/module/courseModule.routes"));
const finalMaterial_routes_1 = __importDefault(require("../../../../features/v1/course/module/material/routes/admin/finalMaterial.routes"));
const router = (0, express_1.Router)();
router.use("/:courseId/modules", courseModule_routes_1.default);
router.use("/:courseId/materials", finalMaterial_routes_1.default);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map