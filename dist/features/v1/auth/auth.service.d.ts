import { Response } from "express";
import { Types } from "mongoose";
export declare const sendVerificationEmail: (emailTo: string, hostUrl: string, token: string) => Promise<void>;
export declare const generateAuthCookie: (userId: Types.ObjectId, res: Response) => void;
//# sourceMappingURL=auth.service.d.ts.map