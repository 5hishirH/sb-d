import { Document, Model, Types } from "mongoose";
import { IUser } from "./user.model";
import { ICourse } from "./course.model";
import { ICourseVideo } from "./courseVideo.model";
import { IFinalMaterial, IModuleMaterial } from "./material.model";
import { IFinalQuiz, IModuleQuiz } from "./quiz.model";
export interface ICourseProgress extends Document {
    _id: Types.ObjectId;
    user: IUser["_id"];
    course: ICourse["_id"];
    progressPercentage: number;
    completedVideos: ICourseVideo["_id"][];
    completedModuleMaterials: IModuleMaterial["_id"][];
    completedFinalMaterials: IFinalMaterial["_id"][];
    completedModuleQuizzes: IModuleQuiz["_id"][];
    completedFinalQuizzes: IFinalQuiz["_id"][];
}
declare const CourseProgress: Model<ICourseProgress>;
export default CourseProgress;
//# sourceMappingURL=courseProgress.model.d.ts.map