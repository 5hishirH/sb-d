import { Document, Model } from "mongoose";
import { IWriter } from "./writer.model";
import { IEbookCategory } from "./ebookCategory.model";
import { IPublication } from "./publication.model";
export interface IEbook extends Document {
    name: string;
    thumbnailUrl: string;
    googleDriveFileId: string;
    fileType: "pdf" | "epub";
    overview?: string;
    summary?: string;
    language: string;
    price: number;
    rating?: number;
    categories: IEbookCategory["_id"][];
    writers: IWriter["_id"][];
    publication?: IPublication["_id"];
}
declare const Ebook: Model<IEbook>;
export default Ebook;
//# sourceMappingURL=ebook.model.d.ts.map