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
export declare const singleQuizSchema: z.ZodDiscriminatedUnion<"quizType", [z.ZodObject<{
    quizType: z.ZodLiteral<"ModuleQuiz">;
    title: z.ZodString;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    module: z.ZodString;
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
    title: string;
    order: number;
    quizType: "ModuleQuiz";
    isAccessedByDefault: boolean;
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
    quizType: "ModuleQuiz";
    module: string;
    timeLimit?: number | undefined;
    isAccessedByDefault?: boolean | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
}>, z.ZodObject<{
    quizType: z.ZodLiteral<"FinalQuiz">;
    title: z.ZodString;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    course: z.ZodString;
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
    title: string;
    order: number;
    course: string;
    quizType: "FinalQuiz";
    isAccessedByDefault: boolean;
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
    quizType: "FinalQuiz";
    timeLimit?: number | undefined;
    isAccessedByDefault?: boolean | undefined;
    questions?: {
        options: string[];
        order: number;
        question: string;
        correctAns: string;
    }[] | undefined;
}>]>;
export declare const createManyQuizzesSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodArray<z.ZodDiscriminatedUnion<"quizType", [z.ZodObject<{
        quizType: z.ZodLiteral<"ModuleQuiz">;
        title: z.ZodString;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
        module: z.ZodString;
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
        title: string;
        order: number;
        quizType: "ModuleQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }>, z.ZodObject<{
        quizType: z.ZodLiteral<"FinalQuiz">;
        title: z.ZodString;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
        course: z.ZodString;
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
        title: string;
        order: number;
        course: string;
        quizType: "FinalQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }>]>, "atleastone">, [{
        title: string;
        order: number;
        quizType: "ModuleQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "FinalQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "ModuleQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "FinalQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
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
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, ...({
        title: string;
        order: number;
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
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
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    })[]]>;
}, "strip", z.ZodTypeAny, {
    body: [{
        title: string;
        order: number;
        quizType: "ModuleQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "FinalQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "ModuleQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "FinalQuiz";
        isAccessedByDefault: boolean;
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
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
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
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, ...({
        title: string;
        order: number;
        quizType: "ModuleQuiz";
        module: string;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
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
        quizType: "FinalQuiz";
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
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
    body: z.ZodEffects<z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        quizType: z.ZodOptional<z.ZodEnum<["ModuleQuiz", "FinalQuiz"]>>;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        order: z.ZodOptional<z.ZodNumber>;
        module: z.ZodOptional<z.ZodString>;
        course: z.ZodOptional<z.ZodString>;
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
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, {
        title?: string | undefined;
        order?: number | undefined;
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }>, {
        title?: string | undefined;
        order?: number | undefined;
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, {
        title?: string | undefined;
        order?: number | undefined;
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }>, {
        title?: string | undefined;
        order?: number | undefined;
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }, {
        title?: string | undefined;
        order?: number | undefined;
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
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
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
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
        course?: string | undefined;
        quizType?: "ModuleQuiz" | "FinalQuiz" | undefined;
        timeLimit?: number | undefined;
        module?: string | undefined;
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
export type GetQuizParams = z.infer<typeof getQuizSchema>["params"];
export type UpdateQuizBody = z.infer<typeof updateQuizSchema>["body"];
export type DeleteQuestionParams = z.infer<typeof deleteQuestionSchema>["params"];
//# sourceMappingURL=quiz.zod.d.ts.map