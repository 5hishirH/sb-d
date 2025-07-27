import { Document, Model, Schema } from "mongoose";
export declare enum ProductType {
    Course = "Course",
    Ebook = "Ebook"
}
export declare enum PaymentMethod {
    Bkash = "bkash"
}
interface IInvoice extends Document {
    _id: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    productType: ProductType;
    product: Schema.Types.ObjectId;
    price: number;
    paymentMethod: PaymentMethod;
    createdAt: Date;
    updatedAt: Date;
}
declare const Invoice: Model<IInvoice>;
export default Invoice;
//# sourceMappingURL=invoice.model.d.ts.map