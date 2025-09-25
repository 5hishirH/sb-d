"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseParams = void 0;
const zod_1 = require("zod");
const common_validation_1 = require("../common.validation");
exports.getCourseParams = zod_1.z.object({
    params: zod_1.z.object({
        courseId: common_validation_1.objectIdSchema,
    }),
});
//# sourceMappingURL=course.validation.js.map