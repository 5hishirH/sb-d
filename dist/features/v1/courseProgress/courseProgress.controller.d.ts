import { Types } from "mongoose";
export declare const completeVideo: import("express").RequestHandler<{
    courseId: string;
    videoId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const completeMaterial: import("express").RequestHandler<{
    courseId: string;
    materialId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const getQuizAttempt: import("express").RequestHandler<{
    quizId: string;
    courseId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const submitQuizAttemptController: import("express").RequestHandler<{
    courseId: Types.ObjectId;
    quizAttemptId: Types.ObjectId;
}, {}, {
    answers: {
        questionId: Types.ObjectId;
        selectedOption: string;
    }[];
    submittedAt: Date;
}, {}, Record<string, any>>;
export declare const getCourseProgresses: import("express").RequestHandler<{}, {}, {}, {
    filter?: "completed" | undefined;
}, Record<string, any>>;
//# sourceMappingURL=courseProgress.controller.d.ts.map