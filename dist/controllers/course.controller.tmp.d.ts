export declare const createCourseWithContent: import("express").RequestHandler<{}, {}, {
    title: string;
    duration: number;
    price: number;
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
            questions: [{
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }, ...{
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }[]];
            timeLimit?: number | undefined;
        }[] | undefined;
        assignments?: {
            order: number;
            title: string;
            duration: number;
            description?: string | undefined;
        }[] | undefined;
    }[] | undefined;
}, {}, Record<string, any>>;
export declare const createManyCoursesWithContent: import("express").RequestHandler<{}, {}, [{
    title: string;
    duration: number;
    price: number;
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
            questions: [{
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }, ...{
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }[]];
            timeLimit?: number | undefined;
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
    duration: number;
    price: number;
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
            questions: [{
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }, ...{
                options: [string, ...string[]];
                question: string;
                correctAns: number;
                order: number;
            }[]];
            timeLimit?: number | undefined;
        }[] | undefined;
        assignments?: {
            order: number;
            title: string;
            duration: number;
            description?: string | undefined;
        }[] | undefined;
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
}, {}, {}, {
    content?: "videos" | "materials" | "quizzes" | "assignments" | undefined;
}, Record<string, any>>;
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
    duration?: number | undefined;
    thumbnailUrl?: string | undefined;
    price?: number | undefined;
    rating?: number | undefined;
    instructor?: [string, ...string[]] | undefined;
    category?: [string, ...string[]] | undefined;
}, {}, Record<string, any>>;
export declare const deleteCourseAndContents: import("express").RequestHandler<{
    courseId: string;
}, {}, any, unknown, Record<string, any>>;
//# sourceMappingURL=course.controller.tmp.d.ts.map