import z from "zod";
export declare const createEbookCategorySchema: z.ZodObject<{
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
export declare const createManyEbookCategorySchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, "many">, {
        name: string;
    }[], {
        name: string;
    }[]>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
    }[];
}, {
    body: {
        name: string;
    }[];
}>;
export declare const getEbookCategorySchema: z.ZodObject<{
    params: z.ZodObject<{
        categoryId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        categoryId: string;
    }, {
        categoryId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        categoryId: string;
    };
}, {
    params: {
        categoryId: string;
    };
}>;
export declare const updateEbookCategorySchema: z.ZodObject<{
    params: z.ZodObject<{
        categoryId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        categoryId: string;
    }, {
        categoryId: string;
    }>;
    body: z.ZodEffects<z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, {
        name: string;
    }, {
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        categoryId: string;
    };
    body: {
        name: string;
    };
}, {
    params: {
        categoryId: string;
    };
    body: {
        name: string;
    };
}>;
export declare const deleteEbookCategorySchema: z.ZodObject<{
    params: z.ZodObject<{
        categoryId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        categoryId: string;
    }, {
        categoryId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        categoryId: string;
    };
}, {
    params: {
        categoryId: string;
    };
}>;
export type UpdateEbookCategory = z.infer<typeof updateEbookCategorySchema>;
//# sourceMappingURL=ebookCategory.zod.d.ts.map