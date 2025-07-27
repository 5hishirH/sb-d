import { Document, Model } from "mongoose";
import { IWriter } from "../../../features/v1/writer/writer.model";
import { IEbookCategory } from "../../../features/v1/ebookCategory/ebookCategory.model";
import { IPublication } from "../../../features/v1/publication/publication.model";
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