import { z } from "zod";
export declare const createWriterSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
    };
}, {
    body: {
        name: string;
    };
}>;
export declare const createManyWritersSchema: z.ZodObject<{
    body: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    body: [{
        name: string;
    }, ...{
        name: string;
    }[]];
}, {
    body: [{
        name: string;
    }, ...{
        name: string;
    }[]];
}>;
export declare const getWriterSchema: z.ZodObject<{
    params: z.ZodObject<{
        writerId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        writerId: string;
    }, {
        writerId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        writerId: string;
    };
}, {
    params: {
        writerId: string;
    };
}>;
export declare const updateWriterSchema: z.ZodObject<{
    params: z.ZodObject<{
        writerId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        writerId: string;
    }, {
        writerId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
    }, {
        name?: string | undefined;
    }>, {
        name?: string | undefined;
    }, {
        name?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        writerId: string;
    };
    body: {
        name?: string | undefined;
    };
}, {
    params: {
        writerId: string;
    };
    body: {
        name?: string | undefined;
    };
}>;
export declare const deleteWriterSchema: z.ZodObject<{
    params: z.ZodObject<{
        writerId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        writerId: string;
    }, {
        writerId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        writerId: string;
    };
}, {
    params: {
        writerId: string;
    };
}>;
export type CreateWriterBody = z.infer<typeof createWriterSchema>["body"];
export type CreateManyWritersBody = z.infer<typeof createManyWritersSchema>["body"];
export type GetWriterParams = z.infer<typeof getWriterSchema>["params"];
export type UpdateWriterParams = z.infer<typeof updateWriterSchema>["params"];
export type UpdateWriterBody = z.infer<typeof updateWriterSchema>["body"];
export type DeleteWriterParams = z.infer<typeof deleteWriterSchema>["params"];
//# sourceMappingURL=writer.zod.d.ts.map