import { z } from "zod";
export declare const createManyModulesWithContentSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodEffects<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        order: z.ZodNumber;
        course: z.ZodString;
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
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }, {
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            order: number;
            title: string;
            timeLimit?: number | undefined;
            questions?: {
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }[] | undefined;
        }, {
            order: number;
            title: string;
            timeLimit?: number | undefined;
            questions?: {
                options: [string, ...string[]];
                question: string;
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
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }>, "atleastone">, [{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }, ...{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }[]], [{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }, ...{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }[]]>, [{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }, ...{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }[]], [{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }, ...{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }[]]>;
}, "strip", z.ZodTypeAny, {
    body: [{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }, ...{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }[]];
}, {
    body: [{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }, ...{
        order: number;
        course: string;
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
                options: [string, ...string[]];
                question: string;
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
    }[]];
}>;
export declare const createModuleSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        order: z.ZodNumber;
        course: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        order: number;
        course: string;
        title?: string | undefined;
    }, {
        order: number;
        course: string;
        title?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        order: number;
        course: string;
        title?: string | undefined;
    };
}, {
    body: {
        order: number;
        course: string;
        title?: string | undefined;
    };
}>;
export declare const updateModuleSchema: z.ZodObject<{
    params: z.ZodObject<{
        moduleId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        moduleId: string;
    }, {
        moduleId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        order?: number | undefined;
        title?: string | undefined;
    }, {
        order?: number | undefined;
        title?: string | undefined;
    }>, {
        order?: number | undefined;
        title?: string | undefined;
    }, {
        order?: number | undefined;
        title?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        moduleId: string;
    };
    body: {
        order?: number | undefined;
        title?: string | undefined;
    };
}, {
    params: {
        moduleId: string;
    };
    body: {
        order?: number | undefined;
        title?: string | undefined;
    };
}>;
export declare const deleteModuleSchema: z.ZodObject<{
    params: z.ZodObject<{
        moduleId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        moduleId: string;
    }, {
        moduleId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        moduleId: string;
    };
}, {
    params: {
        moduleId: string;
    };
}>;
export type UpdateModule = z.infer<typeof updateModuleSchema>;
//# sourceMappingURL=courseModule.zod.d.ts.map