import { Document, Model, Schema } from "mongoose";
interface IDiscountCoupon extends Document {
    code: string;
    discountPercentage: number;
    expiry: Date;
    parent: Schema.Types.ObjectId;
    parentType: string;
}
declare const DiscountCoupon: Model<IDiscountCoupon>;
export default DiscountCoupon;
//# sourceMappingURL=discountCoupon.model.d.ts.map