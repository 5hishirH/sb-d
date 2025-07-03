"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const writerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Writer name is required"],
        unique: [true, "writer name should be unique"],
        trim: true,
    },
}, { timestamps: true });
const Writer = (0, mongoose_1.model)("Writer", writerSchema);
exports.default = Writer;
//# sourceMappingURL=writer.model.js.map