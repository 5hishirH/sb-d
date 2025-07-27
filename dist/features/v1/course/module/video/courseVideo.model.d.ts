import { Document, Model } from "mongoose";
import { ICourseModule } from "../../../../../features/v1/course/module/courseModule.model";
export interface ICourseVideo extends Document {
    title?: string;
    description?: string;
    url: string;
    order: number;
    isAccessedByDefault: boolean;
    module: ICourseModule["_id"];
}
declare const CourseVideo: Model<ICourseVideo>;
export default CourseVideo;
//# sourceMappingURL=courseVideo.model.d.ts.map