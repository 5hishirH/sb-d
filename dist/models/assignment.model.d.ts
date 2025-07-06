import { Document, Model } from "mongoose";
import { ICourseModule } from "./courseModule.model";
export interface IAssignment extends Document {
    title: string;
    description?: string;
    duration: number;
    order: number;
    isUnlockedByDefault: boolean;
    module: ICourseModule["_id"];
}
declare const Assignment: Model<IAssignment>;
export default Assignment;
//# sourceMappingURL=assignment.model.d.ts.map