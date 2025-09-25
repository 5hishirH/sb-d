"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnrolledCoursesSchema = exports.completeMaterialSchema = exports.completeVideoSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const common_schema_1 = require("../../../schemas/common.schema");
exports.completeVideoSchema = zod_1.default.object({
    params: zod_1.default.object({
        courseId: common_schema_1.objectIdSchema,
        videoId: common_schema_1.objectIdSchema,
    }),
});
exports.completeMaterialSchema = zod_1.default.object({
    params: zod_1.default.object({
        courseId: common_schema_1.objectIdSchema,
        materialId: common_schema_1.objectIdSchema,
    }),
});
exports.getEnrolledCoursesSchema = zod_1.default.object({
    query: zod_1.default.object({
        filter: zod_1.default.enum(["completed"]).optional(),
    }),
});
//# sourceMappingURL=courseProgress.validation.js.map