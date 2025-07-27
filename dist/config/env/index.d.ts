import "dotenv/config";
export declare const env: Readonly<{
    NODE_ENV: "development" | "production" | "test";
    NODEMAILER_SERVICE: string;
    NODEMAILER_USER: string;
    NODEMAILER_PASS: string;
    PORT: string;
    MONGODB_URI: string;
    CORS_ORIGINS: string[];
    JWT_SECRET: string;
    JWT_EXPIRES_IN: number;
    AUTH_COOKIE_NAME: string;
    FILE_ENCRYPTION_KEY_HEX: string;
}>;
//# sourceMappingURL=index.d.ts.map