"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_1 = require("../middleware/validate");
const auth_1 = require("../middleware/auth");
const auth_zod_1 = require("../zodSchemas/auth.zod");
const router = (0, express_1.Router)();
router.use(auth_1.authenticate);
router.get("/", (0, auth_1.authorize)("admin"), (0, validate_1.validate)(auth_zod_1.queryUsersSchema), user_controller_1.getUsers);
router
    .route("/:id")
    .get((0, validate_1.validate)(auth_zod_1.getUserSchema), user_controller_1.getUserById)
    .put((0, validate_1.validate)(auth_zod_1.updateUserSchema), user_controller_1.updateUser)
    .delete((0, auth_1.authorize)("admin"), (0, validate_1.validate)(auth_zod_1.getUserSchema), user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map