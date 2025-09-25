import { Document, Types } from "mongoose";
interface ReorderParams {
    modelName: string;
    parentField: string;
    parentId: Types.ObjectId;
    orderedIds: Types.ObjectId[];
}
export declare const reorderService: <T extends Document>({ modelName, parentField, parentId, orderedIds, }: ReorderParams) => Promise<{
    ok: number;
    nModified: number;
} | undefined>;
export {};
//# sourceMappingURL=common.service.d.ts.map