import { IUser } from "../models/user.model";
declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}
export declare const authenticate: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const authorize: (...roles: string[]) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
//# sourceMappingURL=auth.d.ts.map