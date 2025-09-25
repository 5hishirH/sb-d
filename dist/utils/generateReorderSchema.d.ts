import mongoose from "mongoose";
import z from "zod";
interface IReorderParams {
    paramName: string;
    candidateModel: string;
    candidateFieldNameForParent: string;
    parentModel: string;
}
export declare const generateReorderSchema: ({ parentModel, candidateModel, paramName, candidateFieldNameForParent, }: IReorderParams) => z.ZodEffects<z.ZodEffects<z.ZodObject<{
    params: z.ZodObject<{
        [x: string]: z.ZodEffects<z.ZodType<mongoose.Types.ObjectId, z.ZodTypeDef, mongoose.Types.ObjectId>, mongoose.Types.ObjectId, mongoose.Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        [x: string]: mongoose.Types.ObjectId;
    }, {
        [x: string]: mongoose.Types.ObjectId;
    }>;
    body: z.ZodObject<{
        orderedIds: z.ZodArray<z.ZodEffects<z.ZodType<mongoose.Types.ObjectId, z.ZodTypeDef, mongoose.Types.ObjectId>, mongoose.Types.ObjectId, mongoose.Types.ObjectId>, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    }, {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        [x: string]: mongoose.Types.ObjectId;
    };
    body: {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: mongoose.Types.ObjectId;
    };
    body: {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    };
}>, {
    params: {
        [x: string]: mongoose.Types.ObjectId;
    };
    body: {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: mongoose.Types.ObjectId;
    };
    body: {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    };
}>, {
    params: {
        [x: string]: mongoose.Types.ObjectId;
    };
    body: {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    };
}, {
    params: {
        [x: string]: mongoose.Types.ObjectId;
    };
    body: {
        orderedIds: [mongoose.Types.ObjectId, ...mongoose.Types.ObjectId[]];
    };
}>;
export {};
//# sourceMappingURL=generateReorderSchema.d.ts.map