"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const validateEnv = (requiredVars) => {
    const missingVars = requiredVars.filter((key) => !process.env[key]);
    if (missingVars.length > 0) {
        const errorMessage = `Missing required environment variables: ${missingVars.join(", ")}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};
exports.validateEnv = validateEnv;
//# sourceMappingURL=validateEnv.js.map