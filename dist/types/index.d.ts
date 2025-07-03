import { Request } from "express";
import { ParsedQs } from "qs";
import { IUser } from "../models/user.model";
export interface IRequest<TParams = {}, TBody = {}, TQuery = {}> extends Request<TParams, {}, TBody, TQuery & ParsedQs> {
}
export interface IAuthRequest<TParams = {}, TBody = {}, TQuery = {}> extends IRequest<TParams, TBody, TQuery> {
    user: IUser;
}
//# sourceMappingURL=index.d.ts.map