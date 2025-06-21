import mongoose, { Document } from "mongoose";
import { IUser } from "./user.model";
import { ICourse } from "./course.model";
export interface IReview extends Document {
    userId: IUser["_id"];
    courseId: ICourse["_id"];
    rating: number;
    comment?: string;
}
declare const Review: mongoose.Model<IReview, {}, {}, {}, mongoose.Document<unknown, {}, IReview, {}> & IReview & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Review;
//# sourceMappingURL=review.model.d.ts.map