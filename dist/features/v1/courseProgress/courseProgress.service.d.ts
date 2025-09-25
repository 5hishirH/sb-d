import { ICourse } from "../../../models/course.model";
import { ICourseCategory } from "../../../models/courseCategory.model";
import { ICourseModule } from "../../../models/courseModule.model";
import { ICourseVideo } from "../../../models/courseVideo.model";
import { IInstructor } from "../../../models/instructor.model";
import { IFinalMaterial, IModuleMaterial } from "../../../models/material.model";
import { IFinalQuiz, IModuleQuiz } from "../../../models/quiz.model";
import { ClientSession } from "mongoose";
interface IPopulatedVideo extends ICourseVideo {
    isCompleted?: boolean;
    isAccessible?: boolean;
}
interface IPopulatedModuleMaterial extends IModuleMaterial {
    isCompleted?: boolean;
    isAccessible?: boolean;
}
interface IPopulatedModuleQuiz extends Omit<IModuleQuiz, "questions"> {
    isCompleted?: boolean;
    isAccessible?: boolean;
}
interface IPopulatedModule extends ICourseModule {
    videos?: IPopulatedVideo[];
    materials?: IPopulatedModuleMaterial[];
    quizzes?: IPopulatedModuleQuiz[];
}
interface IPopulatedFinalMaterial extends IFinalMaterial {
    isCompleted?: boolean;
    isAccessible?: boolean;
}
interface IPopulatedFinalQuiz extends Omit<IFinalQuiz, "questions"> {
    isCompleted?: boolean;
    isAccessible?: boolean;
}
export interface IPopulatedCourse extends Omit<ICourse, "instructor" | "category"> {
    instructor: IInstructor;
    category: ICourseCategory;
    finalQuizzes?: IPopulatedFinalQuiz[];
    finalMaterials?: IPopulatedFinalMaterial[];
    modules: IPopulatedModule[];
}
export declare const getCourseWithContentById: (courseId: string, dbSession?: ClientSession) => Promise<IPopulatedCourse>;
export declare const getCourseProgress: (userId: string, courseId: string, dbSession?: ClientSession) => Promise<IPopulatedCourse>;
export declare const calcProgressPercent: (course: IPopulatedCourse) => number;
export {};
//# sourceMappingURL=courseProgress.service.d.ts.map