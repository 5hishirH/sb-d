import { Types } from "mongoose";
import { IQuiz } from "../../../../models/quiz.model";
import { IQuizAttempt } from "../../../../models/quizAttempt.model";
import { ClientSession } from "mongoose";
export declare function createQuizAttempt(userId: Types.ObjectId, quizId: Types.ObjectId): Promise<IQuizAttempt>;
interface IAnswer {
    questionId: Types.ObjectId;
    selectedOption: string;
}
interface ISubmitQuizAttemptReturn extends IQuizAttempt {
    quiz: IQuiz;
}
export declare const submitQuizAttemptService: (quizAttemptId: Types.ObjectId, userId: Types.ObjectId, answers: IAnswer[], submittedAt: Date | undefined, session: ClientSession) => Promise<ISubmitQuizAttemptReturn>;
export {};
//# sourceMappingURL=quizAttempt.service.d.ts.map