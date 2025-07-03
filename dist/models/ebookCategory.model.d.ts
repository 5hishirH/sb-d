import { Document, Model } from "mongoose";
export interface IEbookCategory extends Document {
    name: string;
}
declare const EbookCategory: Model<IEbookCategory>;
export default EbookCategory;
//# sourceMappingURL=ebookCategory.model.d.ts.map