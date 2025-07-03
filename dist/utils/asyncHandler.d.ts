import { Response, NextFunction, RequestHandler } from "express";
import { IRequest } from "../types";
type AsyncRequestHandler<P = {}, B = {}, Q = {}> = (req: IRequest<P, B, Q>, res: Response, next: NextFunction) => Promise<any>;
export declare const asyncHandler: <P, B, Q>(requestHandler: AsyncRequestHandler<P, B, Q>) => RequestHandler<P, {}, B, Q>;
export {};
//# sourceMappingURL=asyncHandler.d.ts.map