"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_1 = require("../middleware/validate");
const auth_1 = require("../middleware/auth");
const user_zod_1 = require("../zodSchemas/user.zod");
const router = (0, express_1.Router)();
router.post("/register", (0, validate_1.validate)(user_zod_1.createUserSchema), auth_controller_1.register);
router.post("/login", (0, validate_1.validate)(user_zod_1.loginUserSchema), auth_controller_1.login);
router.post("/refresh-token", auth_controller_1.refreshAccessToken);
router.post("/logout", auth_1.authenticate, auth_controller_1.logoutUser);
router.get("/profile", auth_1.authenticate, auth_controller_1.getProfile);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map