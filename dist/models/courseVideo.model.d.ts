import { Document, Model } from "mongoose";
import { ICourseModule } from "./courseModule.model";
export interface ICourseVideo extends Document {
    title?: string;
    description?: string;
    url: string;
    order: number;
    module: ICourseModule["_id"];
}
declare const CourseVideo: Model<ICourseVideo>;
export default CourseVideo;
//# sourceMappingURL=courseVideo.model.d.ts.map