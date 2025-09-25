import { z } from "zod";
export declare const getModuleSchema: z.ZodObject<{
    params: z.ZodObject<{
        moduleId: z.ZodEffects<z.ZodEffects<z.ZodType<import("mongoose").Types.ObjectId, z.ZodTypeDef, import("mongoose").Types.ObjectId>, import("mongoose").Types.ObjectId, import("mongoose").Types.ObjectId>, import("mongoose").Types.ObjectId, import("mongoose").Types.ObjectId>;
    }, "strip", z.ZodTypeAny, {
        moduleId: import("mongoose").Types.ObjectId;
    }, {
        moduleId: import("mongoose").Types.ObjectId;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        moduleId: import("mongoose").Types.ObjectId;
    };
}, {
    params: {
        moduleId: import("mongoose").Types.ObjectId;
    };
}>;
export type GetModuleParams = z.infer<typeof getModuleSchema>["params"];
//# sourceMappingURL=courseModule.validation.d.ts.map