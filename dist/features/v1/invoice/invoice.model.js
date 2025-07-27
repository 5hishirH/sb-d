"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.ProductType = void 0;
const mongoose_1 = require("mongoose");
var ProductType;
(function (ProductType) {
    ProductType["Course"] = "Course";
    ProductType["Ebook"] = "Ebook";
})(ProductType || (exports.ProductType = ProductType = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["Bkash"] = "bkash";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
const invoiceSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    productType: {
        type: String,
        required: true,
        enum: Object.values(ProductType),
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        refPath: "productType",
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"],
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: Object.values(PaymentMethod),
        default: PaymentMethod.Bkash,
    },
}, {
    timestamps: true,
});
const Invoice = (0, mongoose_1.model)("Invoice", invoiceSchema);
exports.default = Invoice;
//# sourceMappingURL=invoice.model.js.map