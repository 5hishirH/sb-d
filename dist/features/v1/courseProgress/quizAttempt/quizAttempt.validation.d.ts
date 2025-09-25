import { z } from "zod";
export declare const getQuizAttemptSchema: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodString;
        quizId: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        courseId: string;
    }, {
        quizId: string;
        courseId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        quizId: string;
        courseId: string;
    };
}, {
    params: {
        quizId: string;
        courseId: string;
    };
}>;
export declare const submitQuizAttemptSchema: z.ZodObject<{
    params: z.ZodObject<{
        quizAttemptId: z.ZodEffects<z.ZodType<import("mongoose").Types.ObjectId, z.ZodTypeDef, import("mongoose").Types.ObjectId>, import("mongoose").Types.ObjectId, import("mongoose").Types.ObjectId>;
        courseId: z.ZodEffects<z.ZodType<import("mongoose").Types.ObjectId, z.ZodTypeDef, import("mongoose").Types.ObjectId>, import("mongoose").Types.ObjectId, import("mongoose").Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        courseId: import("mongoose").Types.ObjectId;
        quizAttemptId: import("mongoose").Types.ObjectId;
    }, {
        courseId: import("mongoose").Types.ObjectId;
        quizAttemptId: import("mongoose").Types.ObjectId;
    }>;
    body: z.ZodObject<{
        answers: z.ZodArray<z.ZodObject<{
            questionId: z.ZodEffects<z.ZodType<import("mongoose").Types.ObjectId, z.ZodTypeDef, import("mongoose").Types.ObjectId>, import("mongoose").Types.ObjectId, import("mongoose").Types.ObjectId>;
            selectedOption: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            questionId: import("mongoose").Types.ObjectId;
            selectedOption: string;
        }, {
            questionId: import("mongoose").Types.ObjectId;
            selectedOption: string;
        }>, "many">;
        submittedAt: z.ZodDefault<z.ZodOptional<z.ZodDate>>;
    }, "strip", z.ZodTypeAny, {
        answers: {
            questionId: import("mongoose").Types.ObjectId;
            selectedOption: string;
        }[];
        submittedAt: Date;
    }, {
        answers: {
            questionId: import("mongoose").Types.ObjectId;
            selectedOption: string;
        }[];
        submittedAt?: Date | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: import("mongoose").Types.ObjectId;
        quizAttemptId: import("mongoose").Types.ObjectId;
    };
    body: {
        answers: {
            questionId: import("mongoose").Types.ObjectId;
            selectedOption: string;
        }[];
        submittedAt: Date;
    };
}, {
    params: {
        courseId: import("mongoose").Types.ObjectId;
        quizAttemptId: import("mongoose").Types.ObjectId;
    };
    body: {
        answers: {
            questionId: import("mongoose").Types.ObjectId;
            selectedOption: string;
        }[];
        submittedAt?: Date | undefined;
    };
}>;
export type GetQuizAttemptParams = z.infer<typeof getQuizAttemptSchema>["params"];
export type SubmitQuizAttemptParams = z.infer<typeof submitQuizAttemptSchema>["params"];
export type SubmitQuizAttemptBody = z.infer<typeof submitQuizAttemptSchema>["body"];
//# sourceMappingURL=quizAttempt.validation.d.ts.map