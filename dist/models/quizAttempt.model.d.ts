import { Document, Model, Types } from "mongoose";
import { IQuiz } from "../models/quiz.model";
import { IUser } from "../models/user.model";
export interface IQuestionAttemptSubdocument {
    questionId: Types.ObjectId;
    presentedQuestion: string;
    presentedOptions: string[];
    selectedOption: string | null;
    isCorrect: boolean;
    order: number;
}
export interface IQuizAttempt extends Document {
    user: IUser["_id"];
    quiz: IQuiz["_id"];
    questionAttempts: IQuestionAttemptSubdocument[];
    score: number;
    totalQuestions: number;
    startedAt: Date;
    completedAt?: Date | null;
    isCompleted: boolean;
    timeTaken?: number | null;
}
declare const QuizAttempt: Model<IQuizAttempt>;
export default QuizAttempt;
//# sourceMappingURL=quizAttempt.model.d.ts.map