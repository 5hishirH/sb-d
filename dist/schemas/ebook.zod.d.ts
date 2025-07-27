import { z } from "zod";
export declare const createEbookSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodObject<{
        name: z.ZodString;
        thumbnailUrl: z.ZodString;
        googleDriveFileId: z.ZodString;
        fileType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["pdf", "epub"]>>>;
        overview: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        language: z.ZodString;
        price: z.ZodNumber;
        rating: z.ZodOptional<z.ZodNumber>;
        writers: z.ZodArray<z.ZodString, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        thumbnailUrl: string;
        price: number;
        googleDriveFileId: string;
        fileType: "pdf" | "epub";
        language: string;
        writers: [string, ...string[]];
        rating?: number | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
    }, {
        name: string;
        thumbnailUrl: string;
        price: number;
        googleDriveFileId: string;
        language: string;
        writers: [string, ...string[]];
        rating?: number | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
    }>, {
        name: string;
        thumbnailUrl: string;
        price: number;
        googleDriveFileId: string;
        fileType: "pdf" | "epub";
        language: string;
        writers: [string, ...string[]];
        rating?: number | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
    }, {
        name: string;
        thumbnailUrl: string;
        price: number;
        googleDriveFileId: string;
        language: string;
        writers: [string, ...string[]];
        rating?: number | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        thumbnailUrl: string;
        price: number;
        googleDriveFileId: string;
        fileType: "pdf" | "epub";
        language: string;
        writers: [string, ...string[]];
        rating?: number | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
    };
}, {
    body: {
        name: string;
        thumbnailUrl: string;
        price: number;
        googleDriveFileId: string;
        language: string;
        writers: [string, ...string[]];
        rating?: number | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
    };
}>;
export declare const getAllEbooksSchema: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodString>;
        limit: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        limit: string;
        page: string;
    }, {
        limit?: string | undefined;
        page?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        limit: string;
        page: string;
    };
}, {
    query: {
        limit?: string | undefined;
        page?: string | undefined;
    };
}>;
export declare const getEbookSchema: z.ZodObject<{
    params: z.ZodObject<{
        ebookId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        ebookId: string;
    }, {
        ebookId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        ebookId: string;
    };
}, {
    params: {
        ebookId: string;
    };
}>;
export declare const getEbookFileSchema: z.ZodObject<{
    params: z.ZodObject<{
        ebookId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        ebookId: string;
    }, {
        ebookId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        ebookId: string;
    };
}, {
    params: {
        ebookId: string;
    };
}>;
export declare const updateEbookSchema: z.ZodObject<{
    params: z.ZodObject<{
        ebookId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        ebookId: string;
    }, {
        ebookId: string;
    }>;
    body: z.ZodEffects<z.ZodEffects<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        googleDriveFileId: z.ZodOptional<z.ZodString>;
        fileType: z.ZodOptional<z.ZodEnum<["pdf", "epub"]>>;
        overview: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        price: z.ZodOptional<z.ZodNumber>;
        rating: z.ZodOptional<z.ZodNumber>;
        writers: z.ZodOptional<z.ZodArray<z.ZodString, "atleastone">>;
        publication: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    }, {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    }>, {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    }, {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    }>, {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    }, {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        ebookId: string;
    };
    body: {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    };
}, {
    params: {
        ebookId: string;
    };
    body: {
        name?: string | undefined;
        thumbnailUrl?: string | undefined;
        price?: number | undefined;
        rating?: number | undefined;
        googleDriveFileId?: string | undefined;
        fileType?: "pdf" | "epub" | undefined;
        overview?: string | undefined;
        summary?: string | undefined;
        language?: string | undefined;
        writers?: [string, ...string[]] | undefined;
        publication?: string | undefined;
    };
}>;
export type CreateEbookBody = z.infer<typeof createEbookSchema>["body"];
export type GetEbookParams = z.infer<typeof getEbookSchema>["params"];
export type GetManyEbooksParams = z.infer<typeof getAllEbooksSchema>["query"];
export type UpdateEbookBody = z.infer<typeof updateEbookSchema>["body"];
//# sourceMappingURL=ebook.zod.d.ts.map