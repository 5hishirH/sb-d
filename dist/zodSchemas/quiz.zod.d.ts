import { z } from "zod";
export declare const getQuizSchema: z.ZodObject<{
    params: z.ZodObject<{
        quizId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
    }, {
        quizId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        quizId: string;
    };
}, {
    params: {
        quizId: string;
    };
}>;
export declare const updateQuizSchema: z.ZodObject<{
    params: z.ZodObject<{
        quizId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
    }, {
        quizId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        order: z.ZodOptional<z.ZodNumber>;
        questions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            question: z.ZodString;
            options: z.ZodArray<z.ZodString, "atleastone">;
            correctAns: z.ZodNumber;
            order: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }, {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        order?: number | undefined;
        title?: string | undefined;
        timeLimit?: number | undefined;
        questions?: {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }[] | undefined;
    }, {
        order?: number | undefined;
        title?: string | undefined;
        timeLimit?: number | undefined;
        questions?: {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }[] | undefined;
    }>, {
        order?: number | undefined;
        title?: string | undefined;
        timeLimit?: number | undefined;
        questions?: {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }[] | undefined;
    }, {
        order?: number | undefined;
        title?: string | undefined;
        timeLimit?: number | undefined;
        questions?: {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        quizId: string;
    };
    body: {
        order?: number | undefined;
        title?: string | undefined;
        timeLimit?: number | undefined;
        questions?: {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }[] | undefined;
    };
}, {
    params: {
        quizId: string;
    };
    body: {
        order?: number | undefined;
        title?: string | undefined;
        timeLimit?: number | undefined;
        questions?: {
            question: string;
            options: [string, ...string[]];
            correctAns: number;
            order: number;
        }[] | undefined;
    };
}>;
export declare const deleteQuizSchema: z.ZodObject<{
    params: z.ZodObject<{
        quizId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
    }, {
        quizId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        quizId: string;
    };
}, {
    params: {
        quizId: string;
    };
}>;
export declare const deleteQuestionSchema: z.ZodObject<{
    params: z.ZodObject<{
        quizId: z.ZodString;
        questionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        questionId: string;
    }, {
        quizId: string;
        questionId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        quizId: string;
        questionId: string;
    };
}, {
    params: {
        quizId: string;
        questionId: string;
    };
}>;
//# sourceMappingURL=quiz.zod.d.ts.map