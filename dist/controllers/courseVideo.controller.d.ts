export declare const createManyVideos: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getVideoById: import("express").RequestHandler<{
    videoId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateCourseVideoById: import("express").RequestHandler<{
    videoId: string;
}, {}, {
    description?: string | undefined;
    order?: number | undefined;
    title?: string | undefined;
    url?: string | undefined;
}, {}, Record<string, any>>;
export declare const deleteCourseVideoById: import("express").RequestHandler<{
    videoId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=courseVideo.controller.d.ts.map