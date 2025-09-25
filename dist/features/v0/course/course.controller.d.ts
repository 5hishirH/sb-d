export declare const createCourseWithContent: import("express").RequestHandler<{}, {}, {
    title: string;
    price: number;
    discountPercentage: number;
    duration: number;
    instructor: [string, ...string[]];
    category: [string, ...string[]];
    description?: string | undefined;
    thumbnailUrl?: string | undefined;
    videoThumbnailUrl?: string | undefined;
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
            materialType: "ModuleMaterial";
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
    finalMaterials?: {
        title: string;
        order: number;
        isAccessedByDefault: boolean;
        url: string;
        materialType: "FinalMaterial";
        description?: string | undefined;
    }[] | undefined;
}, {}, Record<string, any>>;
export declare const getCourseWithContent: import("express").RequestHandler<{
    courseId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const getCourseContentCount: import("express").RequestHandler<{
    courseId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const getAllCourses: import("express").RequestHandler<{}, {}, {}, {
    limit: string;
    page: string;
    search?: string | undefined;
    sortBy?: string | undefined;
    instructor?: string | undefined;
    category?: string | undefined;
}, Record<string, any>>;
export declare const deleteCourseWithContents: import("express").RequestHandler<{
    courseId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=course.controller.d.ts.map