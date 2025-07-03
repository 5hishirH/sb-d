"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriveService = void 0;
const googleapis_1 = require("googleapis");
const path_1 = __importDefault(require("path"));
const getDriveService = () => {
    const KEYFILEPATH = path_1.default.join(__dirname, "../../credentials.json");
    const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
    const auth = new googleapis_1.google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes: SCOPES,
    });
    return googleapis_1.google.drive({ version: "v3", auth });
};
exports.getDriveService = getDriveService;
//# sourceMappingURL=drive.js.map