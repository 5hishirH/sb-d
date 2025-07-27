import { Response } from "express";
import { Schema } from "mongoose";
export declare const sendVerificationEmail: (emailTo: string, hostUrl: string, token: string) => Promise<void>;
export declare const generateAuthCookie: (userId: Schema.Types.ObjectId, res: Response) => void;
//# sourceMappingURL=auth.service.d.ts.map