"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../../middleware/auth");
const express_1 = require("express");
const invoice_schema_1 = require("./invoice.schema");
const validate_1 = require("../../../middleware/validate");
const invoice_controller_1 = require("./invoice.controller");
const router = (0, express_1.Router)();
router.route("/").post(auth_1.authenticate, (0, validate_1.validate)(invoice_schema_1.purchaseSchema), invoice_controller_1.purchase);
exports.default = router;
//# sourceMappingURL=invoice.routes.js.map