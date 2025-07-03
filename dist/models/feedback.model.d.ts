import { Document, Model } from "mongoose";
export interface IFeedback extends Document {
    username?: string;
    email: string;
    message: string;
}
declare const Feedback: Model<IFeedback>;
export default Feedback;
//# sourceMappingURL=feedback.model.d.ts.map