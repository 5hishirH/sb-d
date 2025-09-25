export declare const createTestimonial: import("express").RequestHandler<{}, {}, {
    name: string;
    avatarUrl: string;
    designation: string;
    quote: string;
    isVisible?: boolean | undefined;
}, {}, Record<string, any>>;
export declare const getAllTestimonials: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getTestimonialById: import("express").RequestHandler<{
    testimonialId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateTestimonialById: import("express").RequestHandler<{
    testimonialId: string;
}, {}, {
    name?: string | undefined;
    avatarUrl?: string | undefined;
    designation?: string | undefined;
    quote?: string | undefined;
    isVisible?: boolean | undefined;
}, {}, Record<string, any>>;
export declare const deleteTestimonialById: import("express").RequestHandler<{
    testimonialId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=testimonial.controller.d.ts.map