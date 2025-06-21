"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_1 = require("../middleware/validate");
const auth_1 = require("../middleware/auth");
const user_zod_1 = require("../zodSchemas/user.zod");
const router = (0, express_1.Router)();
router.use(auth_1.authenticate);
router.get('/', (0, auth_1.authorize)('admin'), (0, validate_1.validate)(user_zod_1.queryUsersSchema), user_controller_1.getUsers);
router.get('/:id', (0, validate_1.validate)(user_zod_1.getUserSchema), user_controller_1.getUserById);
router.put('/:id', (0, validate_1.validate)(user_zod_1.updateUserSchema), user_controller_1.updateUser);
router.delete('/:id', (0, auth_1.authorize)('admin'), (0, validate_1.validate)(user_zod_1.getUserSchema), user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map