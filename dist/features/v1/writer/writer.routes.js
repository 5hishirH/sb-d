"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../../../middleware/validate");
const writer_zod_1 = require("../../../schemas/writer.zod");
const writer_controller_1 = require("../../../features/v1/writer/writer.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validate_1.validate)(writer_zod_1.createWriterSchema), writer_controller_1.createWriter)
    .get(writer_controller_1.getAllWriters);
router
    .route("/bulk")
    .post((0, validate_1.validate)(writer_zod_1.createManyWritersSchema), writer_controller_1.createManyWriters);
router
    .route("/:writerId")
    .get((0, validate_1.validate)(writer_zod_1.getWriterSchema), writer_controller_1.getWriterById)
    .put((0, validate_1.validate)(writer_zod_1.updateWriterSchema), writer_controller_1.updateWriterById)
    .delete((0, validate_1.validate)(writer_zod_1.deleteWriterSchema), writer_controller_1.deleteWriterById);
exports.default = router;
//# sourceMappingURL=writer.routes.js.map