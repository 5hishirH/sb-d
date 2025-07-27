"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const ms_1 = __importDefault(require("ms"));
const msStringSchema = zod_1.z
    .string()
    .refine((val) => (0, ms_1.default)(val) !== undefined, {
    message: "Invalid duration format (e.g., '5m', '1d', '10s')",
})
    .transform((val) => (0, ms_1.default)(val));
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z
        .enum(["development", "production", "test"])
        .default("development"),
    PORT: zod_1.z.string(),
    MONGODB_URI: zod_1.z.string(),
    CORS_ORIGINS: zod_1.z.string().transform((val) => val
        .split(" ")
        .map((origin) => origin.trim())
        .filter(Boolean)),
    JWT_SECRET: zod_1.z.string(),
    JWT_EXPIRES_IN: msStringSchema,
    AUTH_COOKIE_NAME: zod_1.z.string(),
    NODEMAILER_SERVICE: zod_1.z.string(),
    NODEMAILER_USER: zod_1.z.string().email(),
    NODEMAILER_PASS: zod_1.z.string(),
    FILE_ENCRYPTION_KEY_HEX: zod_1.z.string(),
});
const _env = envSchema.safeParse(process.env);
if (!_env.success) {
    console.error("❌ Invalid environment variables:", _env.error.format());
    throw new Error("Invalid environment variables");
}
exports.env = Object.freeze(_env.data);
//# sourceMappingURL=index.js.map