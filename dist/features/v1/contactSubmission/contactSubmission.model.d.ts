import { Document, Model } from "mongoose";
export interface IContactSubmission extends Document {
    username?: string;
    email: string;
    message: string;
}
declare const ContactSubmission: Model<IContactSubmission>;
export default ContactSubmission;
//# sourceMappingURL=contactSubmission.model.d.ts.map