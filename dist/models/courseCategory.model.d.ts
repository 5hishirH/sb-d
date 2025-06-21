import { Document, Model } from "mongoose";
export interface ICourseCategory extends Document {
    name: string;
}
declare const CourseCategory: Model<ICourseCategory>;
export default CourseCategory;
//# sourceMappingURL=courseCategory.model.d.ts.map