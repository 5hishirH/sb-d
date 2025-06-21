import mongoose, { Document, ObjectId, Schema } from "mongoose";
export interface IUser extends Document {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    refreshToken?: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
    generateRefreshToken(): Promise<string>;
}
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}> & IUser & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=user.model.d.ts.map