import mongoose, { Document } from "mongoose";
export interface IInstructor extends Document {
    name: string;
    description: string;
    avatarUrl: string;
    tags?: string[];
}
declare const Instructor: mongoose.Model<IInstructor, {}, {}, {}, mongoose.Document<unknown, {}, IInstructor, {}> & IInstructor & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Instructor;
//# sourceMappingURL=instructor.model.d.ts.map