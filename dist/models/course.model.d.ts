import { Document, Model } from "mongoose";
import { IInstructor } from "./instructor.model";
import { ICourseCategory } from "./courseCategory.model";
export interface ICourse extends Document {
    title: string;
    description?: string;
    thumbnailUrl?: string;
    price: number;
    duration: number;
    isActive: boolean;
    instructor: IInstructor["_id"];
    category: ICourseCategory["_id"];
}
declare const Course: Model<ICourse>;
export default Course;
//# sourceMappingURL=course.model.d.ts.map