import { Document, Model } from "mongoose";
import { IInstructor } from "../models/instructor.model";
import { ICourseCategory } from "../models/courseCategory.model";
export interface ICourse extends Document {
    title: string;
    description?: string;
    thumbnailUrl?: string;
    videoThumbnailUrl?: string;
    price: number;
    discountPercentage: number;
    duration: number;
    rating: number | null;
    enrollmentCount: number;
    isActive: boolean;
    instructor: IInstructor["_id"][];
    category: ICourseCategory["_id"][];
}
declare const Course: Model<ICourse>;
export default Course;
//# sourceMappingURL=course.model.d.ts.map