import mongoose, { Document, ObjectId, Schema } from "mongoose";
export interface IUser extends Document {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    phone: string;
    dateOfBirth: Date;
    institution: string;
    occupation: string;
    year: number;
    address: string;
    accountRole: "user";
    status?: string;
    isActive: boolean;
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
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}> & IUser & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=user.model.d.ts.map