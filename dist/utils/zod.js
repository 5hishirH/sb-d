"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIdSchema = void 0;
const zod_1 = require("zod");
exports.objectIdSchema = zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId');
//# sourceMappingURL=zod.js.map