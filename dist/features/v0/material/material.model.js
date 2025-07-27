"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalMaterial = exports.ModuleMaterial = void 0;
const mongoose_1 = require("mongoose");
const materialBaseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    order: { type: Number, required: true },
    isAccessedByDefault: { type: Boolean, default: false },
}, { timestamps: true, discriminatorKey: "materialType" });
const Material = (0, mongoose_1.model)("Test_Material", materialBaseSchema);
const moduleMaterialSchema = new mongoose_1.Schema({
    module: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CourseModule",
        required: true,
    },
});
const finalMaterialSchema = new mongoose_1.Schema({
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
});
exports.ModuleMaterial = Material.discriminator("ModuleMaterial", moduleMaterialSchema);
exports.FinalMaterial = Material.discriminator("FinalMaterial", finalMaterialSchema);
exports.default = Material;
//# sourceMappingURL=material.model.js.map