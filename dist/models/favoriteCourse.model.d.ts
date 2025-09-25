import { Document, Model, Schema } from "mongoose";
import { IUser } from "./user.model";
import { ICourse } from "./course.model";
export interface IFavoriteCourse extends Document {
    user: IUser["_id"];
    course: ICourse["_id"];
}
export declare const favoriteCourseSchema: Schema;
export declare const FavoriteCourse: Model<IFavoriteCourse>;
//# sourceMappingURL=favoriteCourse.model.d.ts.map