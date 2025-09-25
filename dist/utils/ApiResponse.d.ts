export declare class ApiResponse<T> {
    success: boolean;
    statusCode: number;
    message: string;
    count?: number;
    data?: T;
    constructor(statusCode: number, message: string, data?: T, count?: number);
}
//# sourceMappingURL=ApiResponse.d.ts.map