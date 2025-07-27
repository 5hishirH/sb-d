import mongoose, { Document, ObjectId, Schema } from "mongoose";
export interface IAdminUser extends Document {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    accountRole: "admin";
    status?: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    refreshToken?: string;
    emailVerificationToken?: string | undefined;
    emailVerificationTokenExpires?: Date | undefined;
    passwordResetToken?: string | undefined;
    passwordResetTokenExpires?: Date | undefined;
    comparePassword(candidatePassword: string): Promise<boolean>;
    generateRefreshToken(): Promise<string>;
    generateEmailVerificationToken(): string;
    generatePasswordResetToken(): string;
}
export declare const User: mongoose.Model<IAdminUser, {}, {}, {}, mongoose.Document<unknown, {}, IAdminUser, {}> & IAdminUser & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=adminUser.model.d.ts.map