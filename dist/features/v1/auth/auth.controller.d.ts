export declare const registerUser: import("express").RequestHandler<{}, {}, {
    name: string;
    email: string;
    password: string;
    phone?: string | undefined;
    dateOfBirth?: Date | undefined;
    institution?: string | undefined;
    occupation?: string | undefined;
    year?: number | undefined;
    address?: string | undefined;
}, {}, Record<string, any>>;
export declare const loginUser: import("express").RequestHandler<{}, {}, {
    email: string;
    password: string;
}, {}, Record<string, any>>;
export declare const verifyLoginState: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getUserProfile: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getVerificationEmail: import("express").RequestHandler<{}, {}, {
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
export declare const updateUser: import("express").RequestHandler<{}, {}, {
    phone?: string | undefined;
    dateOfBirth?: Date | undefined;
    institution?: string | undefined;
    occupation?: string | undefined;
    year?: number | undefined;
    address?: string | undefined;
}, {}, Record<string, any>>;
export declare const updatePassword: import("express").RequestHandler<{}, {}, {
    currentPassword: string;
    newPassword: string;
}, {}, Record<string, any>>;
export declare const logout: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
//# sourceMappingURL=auth.controller.d.ts.map