import { Document, Model } from "mongoose";
import { ICourse } from "./course.model";
export interface ICourseModule extends Document {
    title?: string;
    order: number;
    course: ICourse["_id"];
}
declare const CourseModule: Model<ICourseModule>;
export default CourseModule;
//# sourceMappingURL=courseModule.model.d.ts.map