import { Document, Model } from "mongoose";
export interface IWriter extends Document {
    name: string;
}
declare const Writer: Model<IWriter>;
export default Writer;
//# sourceMappingURL=writer.model.d.ts.map