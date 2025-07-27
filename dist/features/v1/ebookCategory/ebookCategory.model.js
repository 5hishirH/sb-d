"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ebookCategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
const EbookCategory = (0, mongoose_1.model)("EbookCategory", ebookCategorySchema);
exports.default = EbookCategory;
//# sourceMappingURL=ebookCategory.model.js.map