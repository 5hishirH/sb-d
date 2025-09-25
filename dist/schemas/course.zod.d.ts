import { z } from "zod";
declare const finalQuizContentSchema: z.ZodObject<{
    title: z.ZodString;
    timeLimit: z.ZodOptional<z.ZodNumber>;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    order: z.ZodNumber;
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
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
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
declare const videoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    order: number;
    isAccessedByDefault: boolean;
    url: string;
    description?: string | undefined;
    title?: string | undefined;
}, {
    order: number;
    url: string;
    description?: string | undefined;
    title?: string | undefined;
    isAccessedByDefault?: boolean | undefined;
}>;
declare const materialSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    isAccessedByDefault: boolean;
    url: string;
    description?: string | undefined;
}, {
    title: string;
    order: number;
    url: string;
    description?: string | undefined;
    isAccessedByDefault?: boolean | undefined;
}>;
declare const assignmentSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    duration: z.ZodNumber;
    order: z.ZodNumber;
    isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    duration: number;
    order: number;
    isAccessedByDefault: boolean;
    description?: string | undefined;
}, {
    title: string;
    duration: number;
    order: number;
    description?: string | undefined;
    isAccessedByDefault?: boolean | undefined;
}>;
declare const moduleSchema: z.ZodEffects<z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    order: z.ZodNumber;
    videos: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
        title?: string | undefined;
    }, {
        order: number;
        url: string;
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }>, "many">>;
    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        order: z.ZodNumber;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
    }, {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }>, "many">>;
    quizzes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        timeLimit: z.ZodOptional<z.ZodNumber>;
        isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
        order: z.ZodNumber;
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
    }, "strip", z.ZodTypeAny, {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
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
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    order: number;
    title?: string | undefined;
    videos?: {
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
        title?: string | undefined;
    }[] | undefined;
    materials?: {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
    }[] | undefined;
    quizzes?: {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }[] | undefined;
}, {
    order: number;
    title?: string | undefined;
    videos?: {
        order: number;
        url: string;
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }[] | undefined;
    materials?: {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }[] | undefined;
    quizzes?: {
        title: string;
        order: number;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    }[] | undefined;
}>, {
    order: number;
    title?: string | undefined;
    videos?: {
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
        title?: string | undefined;
    }[] | undefined;
    materials?: {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        description?: string | undefined;
    }[] | undefined;
    quizzes?: {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        quizType: "ModuleQuiz";
        timeLimit?: number | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
    }[] | undefined;
}, {
    order: number;
    title?: string | undefined;
    videos?: {
        order: number;
        url: string;
        description?: string | undefined;
        title?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }[] | undefined;
    materials?: {
        title: string;
        order: number;
        url: string;
        description?: string | undefined;
        isAccessedByDefault?: boolean | undefined;
    }[] | undefined;
    quizzes?: {
        title: string;
        order: number;
        timeLimit?: number | undefined;
        isAccessedByDefault?: boolean | undefined;
        questions?: {
            options: string[];
            order: number;
            question: string;
            correctAns: string;
        }[] | undefined;
        quizType?: "ModuleQuiz" | undefined;
    }[] | undefined;
}>;
export declare const createCourseWithContentSchema: z.ZodEffects<z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        duration: z.ZodNumber;
        rating: z.ZodOptional<z.ZodNumber>;
        instructor: z.ZodArray<z.ZodString, "atleastone">;
        category: z.ZodArray<z.ZodString, "atleastone">;
        modules: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            order: z.ZodNumber;
            videos: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
                isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }, {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }>, "many">>;
            materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
                isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }, {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }>, "many">>;
            quizzes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                timeLimit: z.ZodOptional<z.ZodNumber>;
                isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
                order: z.ZodNumber;
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
            }, "strip", z.ZodTypeAny, {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
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
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }>, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }>, "many">>;
        finalQuizzes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            timeLimit: z.ZodOptional<z.ZodNumber>;
            isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
            order: z.ZodNumber;
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
        }, "strip", z.ZodTypeAny, {
            title: string;
            order: number;
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
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }>, "many">>;
        assignments: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            duration: z.ZodNumber;
            order: z.ZodNumber;
            isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }, {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    }, {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    };
}, {
    body: {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    };
}>, {
    body: {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    };
}, {
    body: {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    };
}>;
export declare const createManyCoursesWithContentSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        duration: z.ZodNumber;
        rating: z.ZodOptional<z.ZodNumber>;
        instructor: z.ZodArray<z.ZodString, "atleastone">;
        category: z.ZodArray<z.ZodString, "atleastone">;
        modules: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            order: z.ZodNumber;
            videos: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
                isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }, {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }>, "many">>;
            materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
                isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }, {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }>, "many">>;
            quizzes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                timeLimit: z.ZodOptional<z.ZodNumber>;
                isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
                order: z.ZodNumber;
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
            }, "strip", z.ZodTypeAny, {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
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
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }>, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }>, "many">>;
        finalQuizzes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            timeLimit: z.ZodOptional<z.ZodNumber>;
            isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
            order: z.ZodNumber;
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
        }, "strip", z.ZodTypeAny, {
            title: string;
            order: number;
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
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }>, "many">>;
        assignments: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            duration: z.ZodNumber;
            order: z.ZodNumber;
            isAccessedByDefault: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }, {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    }, {
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    }>, "atleastone">, [{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    }, ...{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    }[]], [{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    }, ...{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    }[]]>;
}, "strip", z.ZodTypeAny, {
    body: [{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    }, ...{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                isAccessedByDefault: boolean;
                quizType: "ModuleQuiz";
                timeLimit?: number | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            isAccessedByDefault: boolean;
            quizType: "FinalQuiz";
            timeLimit?: number | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            isAccessedByDefault: boolean;
            description?: string | undefined;
        }[] | undefined;
    }[]];
}, {
    body: [{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    }, ...{
        title: string;
        price: number;
        duration: number;
        instructor: [string, ...string[]];
        category: [string, ...string[]];
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        rating?: number | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            materials?: {
                title: string;
                order: number;
                url: string;
                description?: string | undefined;
                isAccessedByDefault?: boolean | undefined;
            }[] | undefined;
            quizzes?: {
                title: string;
                order: number;
                timeLimit?: number | undefined;
                isAccessedByDefault?: boolean | undefined;
                questions?: {
                    options: string[];
                    order: number;
                    question: string;
                    correctAns: string;
                }[] | undefined;
                quizType?: "ModuleQuiz" | undefined;
            }[] | undefined;
        }[] | undefined;
        finalQuizzes?: {
            title: string;
            order: number;
            timeLimit?: number | undefined;
            isAccessedByDefault?: boolean | undefined;
            questions?: {
                options: string[];
                order: number;
                question: string;
                correctAns: string;
            }[] | undefined;
            quizType?: "FinalQuiz" | undefined;
        }[] | undefined;
        assignments?: {
            title: string;
            duration: number;
            order: number;
            description?: string | undefined;
            isAccessedByDefault?: boolean | undefined;
        }[] | undefined;
    }[]];
}>;
export declare const getAllCoursesSchema: z.ZodObject<{
    query: z.ZodObject<{
        category: z.ZodOptional<z.ZodString>;
        instructor: z.ZodOptional<z.ZodString>;
        search: z.ZodOptional<z.ZodString>;
        sortBy: z.ZodOptional<z.ZodString>;
        page: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        limit: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        limit: string;
        page: string;
        search?: string | undefined;
        sortBy?: string | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }, {
        search?: string | undefined;
        limit?: string | undefined;
        page?: string | undefined;
        sortBy?: string | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        limit: string;
        page: string;
        search?: string | undefined;
        sortBy?: string | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    };
}, {
    query: {
        search?: string | undefined;
        limit?: string | undefined;
        page?: string | undefined;
        sortBy?: string | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    };
}>;
export declare const getCourseSchema: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        courseId: string;
    }, {
        courseId: string;
    }>;
    query: z.ZodObject<{
        content: z.ZodOptional<z.ZodEnum<["videos", "materials", "quizzes", "assignments"]>>;
    }, "strip", z.ZodTypeAny, {
        content?: "videos" | "materials" | "quizzes" | "assignments" | undefined;
    }, {
        content?: "videos" | "materials" | "quizzes" | "assignments" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
    };
    query: {
        content?: "videos" | "materials" | "quizzes" | "assignments" | undefined;
    };
}, {
    params: {
        courseId: string;
    };
    query: {
        content?: "videos" | "materials" | "quizzes" | "assignments" | undefined;
    };
}>;
export declare const updateCourseSchema: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        courseId: string;
    }, {
        courseId: string;
    }>;
    body: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        price: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        rating: z.ZodOptional<z.ZodNumber>;
        isActive: z.ZodOptional<z.ZodBoolean>;
        instructor: z.ZodOptional<z.ZodArray<z.ZodString, "atleastone">>;
        category: z.ZodOptional<z.ZodArray<z.ZodString, "atleastone">>;
    }, "strip", z.ZodTypeAny, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }>, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }>, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }>, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }, {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
    };
    body: {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    };
}, {
    params: {
        courseId: string;
    };
    body: {
        isActive?: boolean | undefined;
        description?: string | undefined;
        title?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        duration?: number | undefined;
        rating?: number | undefined;
        instructor?: [string, ...string[]] | undefined;
        category?: [string, ...string[]] | undefined;
    };
}>;
export declare const courseIdSchema: z.ZodObject<{
    params: z.ZodObject<{
        courseId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        courseId: string;
    }, {
        courseId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
    };
}, {
    params: {
        courseId: string;
    };
}>;
export type CourseIdParam = z.infer<typeof courseIdSchema>["params"];
export type CreateCourseRequest = z.infer<typeof createCourseWithContentSchema>["body"];
export type CreateManyCoursesRequest = z.infer<typeof createManyCoursesWithContentSchema>["body"];
export type TVideoSubdocument = z.infer<typeof videoSchema>;
export type TMaterialSubdocument = z.infer<typeof materialSchema>;
export type TModuleWithContent = z.infer<typeof moduleSchema>;
export type TFinalQuiz = z.infer<typeof finalQuizContentSchema>;
export type TAssignment = z.infer<typeof assignmentSchema>;
export type GetAllCoursesQuery = z.infer<typeof getAllCoursesSchema>["query"];
export type GetCourseParams = z.infer<typeof getCourseSchema>["params"];
export type GetCourseQuery = z.infer<typeof getCourseSchema>["query"];
export type UpdateCourseBody = z.infer<typeof updateCourseSchema>["body"];
export {};
//# sourceMappingURL=course.zod.d.ts.map