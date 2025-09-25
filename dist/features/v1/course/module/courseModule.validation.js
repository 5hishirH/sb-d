"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModuleSchema = void 0;
const zod_1 = require("zod");
const common_validation_1 = require("../../../../features/v1/common.validation");
const courseModule_model_1 = __importDefault(require("../../../../models/courseModule.model"));
exports.getModuleSchema = zod_1.z.object({
    params: zod_1.z.object({
        moduleId: common_validation_1.objectIdSchema.refine(async (moduleId) => {
            const moduleExists = await courseModule_model_1.default.exists({ _id: moduleId });
            return !!moduleExists;
        }, {
            message: "Invalid module id",
            path: ["moduleId"],
        }),
    }),
});
//# sourceMappingURL=courseModule.validation.js.map