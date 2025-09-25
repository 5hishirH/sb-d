"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const material_controller_1 = require("../../../../../../../features/v1/course/module/material/material.controller");
const validate_1 = require("../../../../../../../middleware/validate");
const material_validation_1 = require("../../../../../../../features/v1/course/module/material/material.validation");
const router = (0, express_1.Router)();
router
    .route("/")
    .post((0, validate_1.validate)(material_validation_1.createModuleMaterialSchema), material_controller_1.createModuleMaterial);
router
    .route(":/id/reorder")
    .patch((0, validate_1.validate)(material_validation_1.reorderModuleMaterialSchema), material_controller_1.reorderModuleMaterials);
router
    .route("/:id")
    .get((0, validate_1.validate)(material_validation_1.getMaterialParams), material_controller_1.getMaterialById)
    .patch((0, validate_1.validate)(material_validation_1.updateMaterialSchema), material_controller_1.updateMaterialById)
    .delete((0, validate_1.validate)(material_validation_1.getMaterialParams), material_controller_1.deleteMaterialById);
exports.default = router;
//# sourceMappingURL=module.routes.js.map