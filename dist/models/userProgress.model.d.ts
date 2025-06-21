import { Document, Model } from "mongoose";
import { IUser } from "./user.model";
import { ICourse } from "./course.model";
import { ICourseVideo } from "./courseVideo.model";
import { IMaterial } from "./material.model";
import { IQuiz } from "./quiz.model";
import { IAssignment } from "./assignment.model";
export interface IQuizAnswer {
    question: string;
    answer: string;
    isCorrect: boolean;
}
export interface IWatchedVideo {
    video: ICourseVideo["_id"];
    watchedAt?: Date;
    watchedDuration: number;
    isCompleted?: boolean;
}
export interface IAccessedMaterial {
    material: IMaterial["_id"];
    accessedAt?: Date;
}
export interface IQuizAttempt {
    quiz: IQuiz["_id"];
    attemptNumber: number;
    score: number;
    answers: IQuizAnswer[];
    completedAt: Date;
}
export interface IAssignmentSubmission {
    assignment: IAssignment["_id"];
    submissionText?: string;
    fileUrl?: string;
    submittedAt?: Date;
    grade?: number;
    feedback?: string;
    gradedAt?: Date;
}
export interface IUserProgress extends Document {
    user: IUser["_id"];
    course: ICourse["_id"];
    videosWatched: IWatchedVideo[];
    materialsAccessed: IAccessedMaterial[];
    quizAttempts: IQuizAttempt[];
    assignmentSubmissions: IAssignmentSubmission[];
    enrolledAt?: Date;
    completedAt?: Date;
    overallProgress?: number;
    createdAt: Date;
    updatedAt: Date;
}
declare const UserProgress: Model<IUserProgress>;
export default UserProgress;
//# sourceMappingURL=userProgress.model.d.ts.map