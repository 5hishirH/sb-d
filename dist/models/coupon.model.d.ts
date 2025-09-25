import mongoose, { Document, Model } from "mongoose";
export interface IAppliedItem {
    itemType: "Course" | "Ebook";
    itemId: mongoose.Schema.Types.ObjectId;
}
export interface ICoupon extends Document {
    code: string;
    discountPercentage: number;
    expiry: Date;
    couponType: "Universal" | "Exclusive";
    appliesTo?: IAppliedItem[] | undefined;
}
declare const Coupon: Model<ICoupon>;
export default Coupon;
//# sourceMappingURL=coupon.model.d.ts.map