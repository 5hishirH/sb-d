"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(statusCode, message, data, count) {
        this.success = statusCode < 400;
        this.statusCode = statusCode;
        if (count) {
            this.count = count;
        }
        this.message = message;
        if (data) {
            this.data = data;
        }
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map