import { Document, Schema, Model } from "mongoose";
import { ICourseModule } from "../models/courseModule.model";
import { ICourse } from "../models/course.model";
export interface IQuizBase extends Document {
    title: string;
    timeLimit?: number | null;
    order: number;
    isAccessedByDefault: boolean;
    questions: IQuestionSubdocument[] | null;
}
export interface IQuestionSubdocument extends Document {
    question: string;
    options: string[];
    correctAns: string;
    order: number;
}
export interface IModuleQuiz extends IQuizBase {
    quizType: "ModuleQuiz";
    module: ICourseModule["_id"];
}
export interface IFinalQuiz extends IQuizBase {
    quizType: "FinalQuiz";
    course: ICourse["_id"];
}
export type IQuiz = IModuleQuiz | IFinalQuiz;
export declare const questionSubSchema: Schema;
declare const Quiz: Model<IQuizBase>;
export declare const ModuleQuiz: Model<IModuleQuiz, {}, {}, {}, Document<unknown, {}, IModuleQuiz, {}> & IModuleQuiz & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export declare const FinalQuiz: Model<IFinalQuiz, {}, {}, {}, Document<unknown, {}, IFinalQuiz, {}> & IFinalQuiz & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Quiz;
//# sourceMappingURL=quiz.model.d.ts.map