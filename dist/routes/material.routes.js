"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const material_zod_1 = require("../zodSchemas/material.zod");
const material_controller_1 = require("../controllers/material.controller");
const router = express_1.default.Router();
router
    .route("/bulk")
    .post((0, validate_1.validate)(material_zod_1.createManyMaterialsSchema), material_controller_1.createManyMaterials);
router
    .route("/:materialId")
    .get((0, validate_1.validate)(material_zod_1.deleteMaterialSchema), material_controller_1.getMaterialById)
    .put((0, validate_1.validate)(material_zod_1.updateMaterialSchema), material_controller_1.updateMaterialById)
    .delete((0, validate_1.validate)(material_zod_1.deleteMaterialSchema), material_controller_1.deleteMaterialById);
exports.default = router;
//# sourceMappingURL=material.routes.js.map