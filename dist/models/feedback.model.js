"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const feedbackSchema = new mongoose_1.Schema({
    username: { type: String },
    email: { type: String, required: true },
    message: { type: String, required: true },
});
const Feedback = (0, mongoose_1.model)("Feedback", feedbackSchema);
exports.default = Feedback;
//# sourceMappingURL=feedback.model.js.map