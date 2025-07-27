import { Document, Model } from "mongoose";
import { IUser } from "../../../features/v1/user/user.model";
import { ICourse } from "../../../features/v1/course/course.model";
import { ICourseVideo } from "../../../features/v1/course/module/video/courseVideo.model";
import { IMaterial } from "../../../features/v1/course/module/material/material.model";
import { IQuestionSubdocument, IQuiz } from "../../../features/v1/quiz/quiz.model";
import { IAssignment } from "../../../features/v1/course/assignment/assignment.model";
import { ICourseModule } from "../../../features/v1/course/module/courseModule.model";
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