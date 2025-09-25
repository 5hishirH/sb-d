import { ClientSession } from "mongoose";
import { ICourse } from "../../../models/course.model";
import { ICourseModule } from "../../../models/courseModule.model";
import { ICourseVideo } from "../../../models/courseVideo.model";
import { IFinalQuiz, IModuleQuiz } from "../../../models/quiz.model";
import { IModuleMaterial, IFinalMaterial } from "../../../models/material.model";
import { IInstructor } from "../../../models/instructor.model";
import { ICourseCategory } from "../../../models/courseCategory.model";
export declare const updateCourseContent: import("express").RequestHandler<{
    courseId: string;
}, {}, {
    modules?: {
        order: number;
        _id?: string | undefined;
        title?: string | undefined;
        videos?: {
            order: number;
            isAccessedByDefault: boolean;
            url: string;
            _id?: string | undefined;
            description?: string | undefined;
            title?: string | undefined;
        }[] | undefined;
        materials?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            url: string;
            materialType: "ModuleMaterial";
            _id?: string | undefined;
            description?: string | undefined;
        }[] | undefined;
        quizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "ModuleQuiz";
            _id?: string | undefined;
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
    }[] | undefined;
    finalQuizzes?: {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "FinalQuiz";
        _id?: string | undefined;
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }[] | undefined;
    finalMaterials?: {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        materialType: "FinalMaterial";
        _id?: string | undefined;
        description?: string | undefined;
    }[] | undefined;
}, {}, Record<string, any>>;
interface IPopulatedVideo extends ICourseVideo {
    isCompleted?: boolean;
    isAccessible?: boolean;
}
interface IPopulatedModuleMaterial extends IModuleMaterial {
    isCompleted?: boolean;
    isAccessible?: boolean;
}
interface IPopulatedModuleQuiz extends IModuleQuiz {
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
interface IPopulatedFinalQuiz extends IFinalQuiz {
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
export {};
//# sourceMappingURL=course.service.d.ts.map