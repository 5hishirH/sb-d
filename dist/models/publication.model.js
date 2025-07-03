"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const publicationSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
const Publication = (0, mongoose_1.model)("Publication", publicationSchema);
exports.default = Publication;
//# sourceMappingURL=publication.model.js.map