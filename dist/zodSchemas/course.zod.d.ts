import { z } from "zod";
declare const videoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    order: number;
    url: string;
    description?: string | undefined;
    title?: string | undefined;
}, {
    order: number;
    url: string;
    description?: string | undefined;
    title?: string | undefined;
}>;
declare const materialSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    order: number;
    title: string;
    url: string;
    description?: string | undefined;
}, {
    order: number;
    title: string;
    url: string;
    description?: string | undefined;
}>;
export declare const createCourseWithContentSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        instructor: z.ZodEffects<z.ZodString, string, string>;
        category: z.ZodEffects<z.ZodString, string, string>;
        modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            order: z.ZodNumber;
            videos: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }, {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }>, "many">>;
            materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }, {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }>, "many">>;
            quizzes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                timeLimit: z.ZodOptional<z.ZodNumber>;
                order: z.ZodNumber;
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
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }, {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }>, "many">>;
            assignments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                duration: z.ZodNumber;
                order: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }, {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    };
}, {
    body: {
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    };
}>;
export declare const createManyCoursesWithContentSchema: z.ZodObject<{
    body: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        instructor: z.ZodEffects<z.ZodString, string, string>;
        category: z.ZodEffects<z.ZodString, string, string>;
        modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            order: z.ZodNumber;
            videos: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }, {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }>, "many">>;
            materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                url: z.ZodString;
                order: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }, {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }>, "many">>;
            quizzes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                timeLimit: z.ZodOptional<z.ZodNumber>;
                order: z.ZodNumber;
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
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }, {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }>, "many">>;
            assignments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                duration: z.ZodNumber;
                order: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }, {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }, {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    body: [{
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }, ...{
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }[]];
}, {
    body: [{
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }, ...{
        title: string;
        price: number;
        instructor: string;
        category: string;
        description?: string | undefined;
        thumbnailUrl?: string | undefined;
        modules?: {
            order: number;
            title?: string | undefined;
            videos?: {
                order: number;
                url: string;
                description?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
            materials?: {
                order: number;
                title: string;
                url: string;
                description?: string | undefined;
            }[] | undefined;
            quizzes?: {
                order: number;
                title: string;
                timeLimit?: number | undefined;
                questions?: {
                    question: string;
                    options: [string, ...string[]];
                    correctAns: number;
                    order: number;
                }[] | undefined;
            }[] | undefined;
            assignments?: {
                order: number;
                title: string;
                duration: number;
                description?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }[]];
}>;
export declare const getAllCoursesSchema: z.ZodObject<{
    query: z.ZodObject<{
        category: z.ZodOptional<z.ZodString>;
        instructor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        instructor?: string | undefined;
        category?: string | undefined;
    }, {
        instructor?: string | undefined;
        category?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        instructor?: string | undefined;
        category?: string | undefined;
    };
}, {
    query: {
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
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
    };
}, {
    params: {
        courseId: string;
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
        instructor: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }>, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }>, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }>, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }, {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        courseId: string;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    };
}, {
    params: {
        courseId: string;
    };
    body: {
        description?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        instructor?: string | undefined;
        category?: string | undefined;
    };
}>;
export declare const deleteCourseSchema: z.ZodObject<{
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
export type CreateCourseRequest = z.infer<typeof createCourseWithContentSchema>["body"];
export type TVideoSubdocument = z.infer<typeof videoSchema>;
export type TMaterialSubdocument = z.infer<typeof materialSchema>;
export {};
//# sourceMappingURL=course.zod.d.ts.map