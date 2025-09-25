"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseSchema = void 0;
const common_schema_1 = require("../../../schemas/common.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = __importDefault(require("zod"));
exports.purchaseSchema = zod_1.default
    .object({
    body: zod_1.default.object({
        productType: zod_1.default.enum(["Course", "Ebook"]),
        product: common_schema_1.objectIdSchema,
        price: zod_1.default.number(),
        paymentMethod: zod_1.default.enum(["bkash"]),
    }),
})
    .refine(async (data) => {
    const productExists = await mongoose_1.default
        .model(data.body.productType)
        .exists({ _id: data.body.product });
    return !!productExists;
}, {
    message: `Invalid product id`,
    path: ["productType", "product"],
});
//# sourceMappingURL=invoice.schema.js.map