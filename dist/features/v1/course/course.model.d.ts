import { Document, Model } from "mongoose";
import { IInstructor } from "../../../features/v1/courseInstructor/instructor.model";
import { ICourseCategory } from "../../../features/v1/courseCategory/courseCategory.model";
export interface ICourse extends Document {
    title: string;
    description?: string;
    thumbnailUrl: string;
    price: number;
    duration: number;
    rating: number;
    enrollmentCount: number;
    isActive: boolean;
    instructor: IInstructor["_id"][];
    category: ICourseCategory["_id"][];
}
declare const Course: Model<ICourse>;
export default Course;
//# sourceMappingURL=course.model.d.ts.map