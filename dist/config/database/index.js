"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const env_1 = require("../../config/env");
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect(env_1.env.MONGODB_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        mongoose_1.default.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err);
        });
        mongoose_1.default.connection.on("disconnected", () => {
            console.log("📡 MongoDB disconnected");
        });
        process.on("SIGINT", async () => {
            await mongoose_1.default.connection.close();
            console.log("🔌 MongoDB connection closed through app termination");
            process.exit(0);
        });
    }
    catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=index.js.map