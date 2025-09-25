"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIdSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
exports.objectIdSchema = zod_1.z
    .custom((value) => {
    if (value instanceof mongoose_1.default.Types.ObjectId) {
        return true;
    }
    if (typeof value === "string" && mongoose_1.default.Types.ObjectId.isValid(value)) {
        return true;
    }
    return false;
}, { message: "Invalid ObjectId" })
    .transform((value) => {
    if (typeof value === "string") {
        return new mongoose_1.default.Types.ObjectId(value);
    }
    return value;
});
//# sourceMappingURL=common.validation.js.map