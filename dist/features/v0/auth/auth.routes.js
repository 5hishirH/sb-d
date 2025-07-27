"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("../../../middleware/validate");
const express_1 = require("express");
const auth_zod_1 = require("../../../features/v0/auth/auth.zod");
const auth_controller_1 = require("../../../features/v0/auth/auth.controller");
const auth_1 = require("../../../middleware/auth");
const auth_schema_1 = require("../../../schemas/auth.schema");
const router = (0, express_1.Router)();
router.route("/register").post((0, validate_1.validate)(auth_zod_1.registerUserSchema), auth_controller_1.registerUser);
router
    .route("/send-verification-email")
    .post((0, validate_1.validate)(auth_schema_1.sendVerificationEmailSchema), auth_controller_1.getVerificationEmail);
router.route("/login").post((0, validate_1.validate)(auth_schema_1.loginUserSchema), auth_controller_1.loginUser);
router.route("/profile").get(auth_1.authenticate, auth_controller_1.getUserProfile);
router.route("/logout").post(auth_1.authenticate, auth_controller_1.logoutUser);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map