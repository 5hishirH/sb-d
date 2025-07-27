import { Document, Model } from "mongoose";
import { ICourse } from "../../../../features/v1/course/course.model";
export interface IAssignment extends Document {
    title: string;
    description?: string;
    duration: number;
    order: number;
    isAccessedByDefault: boolean;
    course: ICourse["_id"];
}
declare const Assignment: Model<IAssignment>;
export default Assignment;
//# sourceMappingURL=assignment.model.d.ts.map