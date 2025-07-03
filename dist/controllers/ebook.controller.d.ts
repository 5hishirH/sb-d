export declare const createEbook: import("express").RequestHandler<{}, {}, {
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
}, {}, Record<string, any>>;
export declare const getAllEbooks: import("express").RequestHandler<{}, {}, {}, {
    limit: string;
    page: string;
}, Record<string, any>>;
export declare const getEbookById: import("express").RequestHandler<{
    ebookId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const getEbookFileById: import("express").RequestHandler<{
    ebookId: string;
}, {}, {}, {}, Record<string, any>>;
export declare const updateEbookById: import("express").RequestHandler<{
    ebookId: string;
}, {}, {
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
}, {}, Record<string, any>>;
export declare const deleteEbookById: import("express").RequestHandler<{
    ebookId: string;
}, {}, {}, {}, Record<string, any>>;
//# sourceMappingURL=ebook.controller.d.ts.map