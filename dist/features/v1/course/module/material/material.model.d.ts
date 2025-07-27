import { Document, Model } from "mongoose";
import { ICourseModule } from "../../../../../features/v1/course/module/courseModule.model";
export interface IMaterial extends Document {
    title: string;
    description?: string;
    url: string;
    order: number;
    isAccessedByDefault: boolean;
    module: ICourseModule["_id"];
}
declare const Material: Model<IMaterial>;
export default Material;
//# sourceMappingURL=material.model.d.ts.map