"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./config/env");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const startServer = async () => {
    try {
        await (0, database_1.connectDB)();
        app_1.default.listen(env_1.env.PORT, () => {
            console.log(`🚀 Server running on port ${env_1.env.PORT}`);
            console.log(`📊 Health check: http://localhost:${env_1.env.PORT}/health`);
            console.log(`🌍 Environment: ${env_1.env.NODE_ENV}`);
        });
    }
    catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map