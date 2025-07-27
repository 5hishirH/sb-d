import { Document, Model } from "mongoose";
export interface IPublication extends Document {
    name: string;
}
declare const Publication: Model<IPublication>;
export default Publication;
//# sourceMappingURL=publication.model.d.ts.map