import { z } from "zod";
export declare const questionSchema: z.ZodEffects<z.ZodObject<{
    question: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
    correctAns: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    options: string[];
    order: number;
    question: string;
    correctAns: string;
}, {
    options: string[];
    order: number;
    question: string;
    correctAns: string;
}>, {
    options: string[];
    order: number;
    question: string;
    correctAns: string;
}, {
    options: string[];
    order: number;
    question: string;
    correctAns: string;
}>;
declare const moduleQuizSchema: z.ZodObject<{
    title: z.ZodString;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    questions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
        correctAns: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, "many">>;
} & {
    quizType: z.ZodDefault<z.ZodLiteral<"ModuleQuiz">>;
    module: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    isAccessedByDefault: boolean;
    quizType: "ModuleQuiz";
    module: string;
    timeLimit?: number | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
}, {
    title: string;
    order: number;
    module: string;
    timeLimit?: number | undefined;
    isAccessedByDefault?: boolean | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
    quizType?: "ModuleQuiz" | undefined;
}>;
declare const finalQuizSchema: z.ZodObject<{
    title: z.ZodString;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    questions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
        correctAns: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, "many">>;
} & {
    quizType: z.ZodDefault<z.ZodLiteral<"FinalQuiz">>;
    course: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    course: string;
    isAccessedByDefault: boolean;
    quizType: "FinalQuiz";
    timeLimit?: number | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
}, {
    title: string;
    order: number;
    course: string;
    timeLimit?: number | undefined;
    isAccessedByDefault?: boolean | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
    quizType?: "FinalQuiz" | undefined;
}>;
export declare const singleQuizSchema: z.ZodDiscriminatedUnion<"quizType", [z.ZodObject<{
    title: z.ZodString;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    questions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
        correctAns: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, "many">>;
} & {
    quizType: z.ZodDefault<z.ZodLiteral<"ModuleQuiz">>;
    module: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    isAccessedByDefault: boolean;
    quizType: "ModuleQuiz";
    module: string;
    timeLimit?: number | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
}, {
    title: string;
    order: number;
    module: string;
    timeLimit?: number | undefined;
    isAccessedByDefault?: boolean | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
    quizType?: "ModuleQuiz" | undefined;
}>, z.ZodObject<{
    title: z.ZodString;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    questions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
        correctAns: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }, {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }>, "many">>;
} & {
    quizType: z.ZodDefault<z.ZodLiteral<"FinalQuiz">>;
    course: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    course: string;
    isAccessedByDefault: boolean;
    quizType: "FinalQuiz";
    timeLimit?: number | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
}, {
    title: string;
    order: number;
    course: string;
    timeLimit?: number | undefined;
    isAccessedByDefault?: boolean | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
    quizType?: "FinalQuiz" | undefined;
}>]>;
export declare const createManyQuizzesSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodArray<z.ZodDiscriminatedUnion<"quizType", [z.ZodObject<{
        title: z.ZodString;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
        questions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
            question: z.ZodString;
            options: z.ZodArray<z.ZodString, "many">;
            correctAns: z.ZodString;
            order: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }>, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }>, "many">>;
    } & {
        quizType: z.ZodDefault<z.ZodLiteral<"ModuleQuiz">>;
        module: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, {
        title: string;
        order: number;
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    }>, z.ZodObject<{
        title: z.ZodString;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
        questions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
            question: z.ZodString;
            options: z.ZodArray<z.ZodString, "many">;
            correctAns: z.ZodString;
            order: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }>, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }>, "many">>;
    } & {
        quizType: z.ZodDefault<z.ZodLiteral<"FinalQuiz">>;
        course: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, {
        title: string;
        order: number;
        course: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "FinalQuiz" | undefined;
    }>]>, "atleastone">, [{
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, ...({
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    })[]], [{
        title: string;
        order: number;
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "FinalQuiz" | undefined;
    }, ...({
        title: string;
        order: number;
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "FinalQuiz" | undefined;
    })[]]>;
}, "strip", z.ZodTypeAny, {
    body: [{
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, ...({
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        isAccessedByDefault: boolean;
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    })[]];
}, {
    body: [{
        title: string;
        order: number;
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "FinalQuiz" | undefined;
    }, ...({
        title: string;
        order: number;
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    } | {
        title: string;
        order: number;
        course: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "FinalQuiz" | undefined;
    })[]];
}>;
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
    body: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        order: z.ZodOptional<z.ZodNumber>;
        isAccessedByDefault: z.ZodOptional<z.ZodBoolean>;
        questions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
            question: z.ZodString;
            options: z.ZodArray<z.ZodString, "many">;
            correctAns: z.ZodString;
            order: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }>, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }, {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        order?: number | undefined;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, {
        title?: string | undefined;
        order?: number | undefined;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        quizId: string;
    };
    body: {
        title?: string | undefined;
        order?: number | undefined;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    };
}, {
    params: {
        quizId: string;
    };
    body: {
        title?: string | undefined;
        order?: number | undefined;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
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
export type QuizType = z.infer<typeof singleQuizSchema>;
export type ModuleQuizType = z.infer<typeof moduleQuizSchema>;
export type FinalQuizType = z.infer<typeof finalQuizSchema>;
export type GetQuizParams = z.infer<typeof getQuizSchema>["params"];
export type UpdateQuizBody = z.infer<typeof updateQuizSchema>["body"];
export type DeleteQuestionParams = z.infer<typeof deleteQuestionSchema>["params"];
export {};
//# sourceMappingURL=quiz.zod.d.ts.map