export declare const createCourseWithContent: import("express").RequestHandler<{}, {}, {
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
}, {}, Record<string, any>>;
export declare const createManyCoursesWithContent: import("express").RequestHandler<{}, {}, [{
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
}[]], {}, Record<string, any>>;
export declare const getAllCourses: import("express").RequestHandler<{}, {}, {}, {
    limit: string;
    page: string;
    search?: string | undefined;
    sortBy?: string | undefined;
    instructor?: string | undefined;
    category?: string | undefined;
}, Record<string, any>>;
export declare const getCourseWithContent: import("express").RequestHandler<{
    courseId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const getCourseContentCount: import("express").RequestHandler<{
    courseId: string;
}, {}, any, unknown, Record<string, any>>;
export declare const getFirstCourseVideo: import("express").RequestHandler<{
    courseId: string;
}, {}, any, unknown, Record<string, any>>;
export declare const activateCourse: import("express").RequestHandler<{
    courseId: string;
}, {}, any, unknown, Record<string, any>>;
export declare const updateCourseById: import("express").RequestHandler<{
    courseId: string;
}, {}, {
    isActive?: boolean | undefined;
    description?: string | undefined;
    title?: string | undefined;
    thumbnailUrl?: string | undefined;
    price?: number | undefined;
    duration?: number | undefined;
    rating?: number | undefined;
    instructor?: [string, ...string[]] | undefined;
    category?: [string, ...string[]] | undefined;
}, {}, Record<string, any>>;
export declare const deleteCourseAndContents: import("express").RequestHandler<{
    courseId: string;
}, {}, any, unknown, Record<string, any>>;
//# sourceMappingURL=course.controller.d.ts.map