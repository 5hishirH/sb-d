"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_1 = require("../middleware/validate");
const auth_1 = require("../middleware/auth");
const auth_zod_1 = require("../zodSchemas/auth.zod");
const router = (0, express_1.Router)();
router.route("/register").post((0, validate_1.validate)(auth_zod_1.registerUserSchema), auth_controller_1.register);
router.route("/login").post((0, validate_1.validate)(auth_zod_1.loginUserSchema), auth_controller_1.login);
router.route("/profile").get(auth_1.authenticate, auth_controller_1.getProfile);
router
    .route("/send-verification-email")
    .post((0, validate_1.validate)(auth_zod_1.sendVerificationEmailSchema), auth_controller_1.sendVerificationEmail);
router
    .route("/verify-email/:token")
    .get((0, validate_1.validate)(auth_zod_1.verifyEmailSchema), auth_controller_1.verifyEmail);
router
    .route("/forgot-password")
    .post((0, validate_1.validate)(auth_zod_1.forgotPasswordSchema), auth_controller_1.forgotPassword);
router
    .route("/reset-password/:token")
    .patch((0, validate_1.validate)(auth_zod_1.resetPasswordSchema), auth_controller_1.resetPassword);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map