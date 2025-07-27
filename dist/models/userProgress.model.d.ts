import { Document, Model } from "mongoose";
import { IUser } from "../models/user.model";
import { ICourse } from "../models/course.model";
import { ICourseVideo } from "../models/courseVideo.model";
import { IMaterial } from "../models/material.model";
import { IQuestionSubdocument, IQuiz } from "../models/quiz.model";
import { IAssignment } from "../models/assignment.model";
import { ICourseModule } from "../models/courseModule.model";
export interface IUserCourseVideo {
    video: ICourseVideo["_id"];
    isAccessed: boolean;
    accessedAt?: Date;
    watchedAt?: Date;
    watchedDuration: number;
    isCompleted?: boolean;
    completedAt?: Date;
}
export interface IUserCourseMaterial {
    material: IMaterial["_id"];
    isAccessed: boolean;
    accessedAt?: Date;
}
export interface IQuizAnswer extends IQuestionSubdocument {
    userAns: string;
    isCorrect: boolean;
}
export interface IQuizAttempt {
    attemptNumber: number;
    fullScore: number;
    userScore: number;
    answers: IQuizAnswer[];
    completedAt: Date;
}
export interface IUserCourseQuiz {
    quiz: IQuiz["_id"];
    quizType: "ModuleQuiz" | "FinalQuiz";
    isAccessed: boolean;
    attempts: IQuizAttempt[];
}
export interface IAssignmentSubmission {
    assignment: IAssignment["_id"];
    isAccessed: boolean;
    submissionText?: string;
    fileUrl?: string;
    submittedAt: Date;
    fullScore: number;
    uesrScore?: number;
    feedback?: string;
    gradedAt?: Date;
}
export interface IUserCourseModule {
    module: ICourseModule["_id"];
    isCompleted: boolean;
    videos: IUserCourseVideo[];
    materials: IUserCourseMaterial[];
    quizzes: IUserCourseQuiz[];
}
export interface IUserProgress extends Document {
    user: IUser["_id"];
    course: ICourse["_id"];
    modules: IUserCourseModule[];
    finalQuizzes?: IUserCourseQuiz[];
    assignments: IAssignmentSubmission[];
    completedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
declare const UserProgress: Model<IUserProgress>;
export default UserProgress;
//# sourceMappingURL=userProgress.model.d.ts.map