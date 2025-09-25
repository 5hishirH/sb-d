"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_routes_1 = __importDefault(require("../../../../features/v1/course/routes/admin.routes"));
const admin_routes_2 = __importDefault(require("../../../../features/v1/course/module/material/routes/admin.routes"));
const router = (0, express_1.Router)();
router.use("/courses", admin_routes_1.default);
router.use("/materials", admin_routes_2.default);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map