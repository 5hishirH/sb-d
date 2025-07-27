export declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    success: boolean;
    data: any;
    errors: any[];
    constructor(statusCode: number, message?: string, errors?: any[], stack?: string);
    static badRequest(message: string, errors?: any[]): AppError;
    static unauthorized(message?: string): AppError;
    static forbidden(message?: string): AppError;
    static notFound(message?: string): AppError;
    static conflict(message?: string): AppError;
    static internal(message?: string): AppError;
}
//# sourceMappingURL=AppError.d.ts.map