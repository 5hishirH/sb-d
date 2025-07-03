"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactSubmissionSchema = new mongoose_1.Schema({
    username: { type: String },
    email: { type: String, required: true },
    message: { type: String, required: true },
});
const ContactSubmission = (0, mongoose_1.model)("ContactSubmission", contactSubmissionSchema);
exports.default = ContactSubmission;
//# sourceMappingURL=contactSubmission.model.js.map