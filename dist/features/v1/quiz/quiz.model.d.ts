import { Document, Schema, Model } from "mongoose";
import { ICourseModule } from "../../../features/v1/course/module/courseModule.model";
import { ICourse } from "../../../features/v1/course/course.model";
export interface IQuestionSubdocument {
    question: string;
    options: string[];
    correctAns: string;
    order: number;
}
export interface IQuiz extends Document {
    title: string;
    quizType: "ModuleQuiz" | "FinalQuiz";
    timeLimit?: number;
    order: number;
    isAccessedByDefault: boolean;
    questions: IQuestionSubdocument[];
    module?: ICourseModule["_id"];
    course?: ICourse["_id"];
}
export declare const questionSubSchema: Schema;
declare const Quiz: Model<IQuiz>;
export default Quiz;
//# sourceMappingURL=quiz.model.d.ts.map