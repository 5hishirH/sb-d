"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../../../features/v1/admin/user/user.controller");
const validate_1 = require("../../../../middleware/validate");
const auth_1 = require("../../../../middleware/auth");
const auth_schema_1 = require("../../../../schemas/auth.schema");
const router = (0, express_1.Router)();
router.use(auth_1.authenticate);
router.get("/", (0, validate_1.validate)(auth_schema_1.queryUsersSchema), user_controller_1.getUsers);
router
    .route("/:id")
    .get((0, validate_1.validate)(auth_schema_1.getUserSchema), user_controller_1.getUserById)
    .delete((0, auth_1.authorize)("admin"), (0, validate_1.validate)(auth_schema_1.getUserSchema), user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map