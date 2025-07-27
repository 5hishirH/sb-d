"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../../../features/v1/auth/auth.controller");
const validate_1 = require("../../../middleware/validate");
const auth_1 = require("../../../middleware/auth");
const auth_schema_1 = require("../../../schemas/auth.schema");
const router = (0, express_1.Router)();
router.route("/register").post((0, validate_1.validate)(auth_schema_1.registerUserSchema), auth_controller_1.registerUser);
router.route("/login").post((0, validate_1.validate)(auth_schema_1.loginUserSchema), auth_controller_1.loginUser);
router.route("/verify").get(auth_1.authenticate, auth_controller_1.verifyLoginState);
router.route("/profile").get(auth_1.authenticate, auth_controller_1.getUserProfile);
router.route("/logout").post(auth_1.authenticate, auth_controller_1.logout);
router
    .route("/send-verification-email")
    .post((0, validate_1.validate)(auth_schema_1.sendVerificationEmailSchema), auth_controller_1.getUserProfile);
router
    .route("/verify-email/:token")
    .get((0, validate_1.validate)(auth_schema_1.verifyEmailSchema), auth_controller_1.verifyEmail);
router
    .route("/update-info")
    .patch(auth_1.authenticate, (0, validate_1.validate)(auth_schema_1.updateUserSchema), auth_controller_1.updateUser);
router
    .route("/update-password")
    .patch(auth_1.authenticate, (0, validate_1.validate)(auth_schema_1.updatePasswordSchema), auth_controller_1.updatePassword);
router
    .route("/forgot-password")
    .post((0, validate_1.validate)(auth_schema_1.forgotPasswordSchema), auth_controller_1.forgotPassword);
router
    .route("/reset-password/:token")
    .patch((0, validate_1.validate)(auth_schema_1.resetPasswordSchema), auth_controller_1.resetPassword);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map