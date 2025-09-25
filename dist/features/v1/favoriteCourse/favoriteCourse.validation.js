"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFavoriteMarkSchema = void 0;
const course_model_1 = __importDefault(require("../../../models/course.model"));
const common_schema_1 = require("../../../schemas/common.schema");
const zod_1 = require("zod");
exports.addFavoriteMarkSchema = zod_1.z.object({
    params: zod_1.z
        .object({
        courseId: common_schema_1.objectIdSchema,
    })
        .refine(async ({ courseId }) => {
        const courseExists = await course_model_1.default.exists({ _id: courseId });
        return !!courseExists;
    }, {
        message: "Course with the request id does not exist",
        path: ["courseId"],
    }),
});
//# sourceMappingURL=favoriteCourse.validation.js.map