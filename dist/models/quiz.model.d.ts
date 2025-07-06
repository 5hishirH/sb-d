import { Document, Model } from "mongoose";
import { ICourseModule } from "./courseModule.model";
export interface IQuestionSubdocument {
    question: string;
    options: string[];
    correctAns: number;
    order: number;
}
export interface IQuiz extends Document {
    title: string;
    timeLimit?: number;
    order: number;
    isUnlockedByDefault: boolean;
    module: ICourseModule["_id"];
    questions: IQuestionSubdocument[];
}
declare const Quiz: Model<IQuiz>;
export default Quiz;
//# sourceMappingURL=quiz.model.d.ts.map