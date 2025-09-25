import { Document, Model } from "mongoose";
export interface ITestimonial extends Document {
    name: string;
    designation: string;
    avatarUrl: string;
    quote: string;
    isVisible: boolean;
}
declare const Testimonial: Model<ITestimonial>;
export default Testimonial;
//# sourceMappingURL=testimonial.model.d.ts.map