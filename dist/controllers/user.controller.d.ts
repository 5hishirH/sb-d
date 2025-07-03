export declare const getUsers: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const getUserById: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
export declare const updateUser: import("express").RequestHandler<{
    id: string;
}, {}, {
    name?: string | undefined;
    email?: string | undefined;
    role?: "user" | "admin" | undefined;
}, {}, Record<string, any>>;
export declare const deleteUser: import("express").RequestHandler<unknown, {}, unknown, unknown, Record<string, any>>;
//# sourceMappingURL=user.controller.d.ts.map