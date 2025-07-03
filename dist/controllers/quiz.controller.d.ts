export declare const createManyQuizzes: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getQuizById: import("express").RequestHandler<{
    quizId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateQuizWithQuestions: import("express").RequestHandler<{
    quizId: string;
}, {}, {
    order?: number | undefined;
    title?: string | undefined;
    timeLimit?: number | undefined;
    questions?: {
        options: [string, ...string[]];
        question: string;
        correctAns: number;
        order: number;
    }[] | undefined;
}, {}, Record<string, any>>;
export declare const deleteQuestionById: import("express").RequestHandler<{
    quizId: string;
    questionId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const deleteQuizWithQuestions: import("express").RequestHandler<{
    quizId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=quiz.controller.d.ts.map