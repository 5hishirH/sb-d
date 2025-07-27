import { Document, Model } from "mongoose";
import { ICourseModule } from "../../../models/courseModule.model";
import { ICourse } from "../../../models/course.model";
export interface IMaterialBase extends Document {
    title: string;
    description?: string;
    url: string;
    order: number;
    isAccessedByDefault: boolean;
}
export interface IModuleMaterial extends IMaterialBase {
    materialType: "ModuleMaterial";
    module: ICourseModule["_id"];
}
export interface IFinalMaterial extends IMaterialBase {
    materialType: "FinalMaterial";
    course: ICourse["_id"];
}
export type IMaterial = IModuleMaterial | IFinalMaterial;
declare const Material: Model<IMaterialBase>;
export declare const ModuleMaterial: Model<IModuleMaterial, {}, {}, {}, Document<unknown, {}, IModuleMaterial, {}> & IModuleMaterial & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export declare const FinalMaterial: Model<IFinalMaterial, {}, {}, {}, Document<unknown, {}, IFinalMaterial, {}> & IFinalMaterial & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Material;
//# sourceMappingURL=material.model.d.ts.map