export declare const register: import("express").RequestHandler<{}, {}, {
    name: string;
    email: string;
    password: string;
}, {}, Record<string, any>>;
export declare const login: import("express").RequestHandler<{}, {}, {
    email: string;
    password: string;
}, {}, Record<string, any>>;
export declare const getProfile: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const sendVerificationEmail: import("express").RequestHandler<{}, {}, {
    email: string;
}, {}, Record<string, any>>;
export declare const verifyEmail: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const forgotPassword: import("express").RequestHandler<{}, {}, {
    email: string;
}, {}, Record<string, any>>;
export declare const resetPassword: import("express").RequestHandler<{
    token: string;
}, {}, {
    password: string;
    passwordConfirmation: string;
}, {}, Record<string, any>>;
//# sourceMappingURL=auth.controller.d.ts.map