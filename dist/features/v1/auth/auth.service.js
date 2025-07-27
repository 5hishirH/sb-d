"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthCookie = exports.sendVerificationEmail = void 0;
const env_1 = require("../../../config/env");
const nodemailer_1 = __importDefault(require("nodemailer"));
const jwt_service_1 = require("../../../services/jwt.service");
const constants_1 = require("../../../config/constants");
const transport = nodemailer_1.default.createTransport({
    service: env_1.env.NODEMAILER_SERVICE,
    auth: {
        user: env_1.env.NODEMAILER_USER,
        pass: env_1.env.NODEMAILER_PASS,
    },
});
const sendVerificationEmail = async (emailTo, hostUrl, token) => {
    const verificationUrl = `${hostUrl}/api/auth/verify-email/${token}`;
    const mailOptions = {
        from: `"Science Bee" <${env_1.env.NODEMAILER_USER}>`,
        to: emailTo,
        subject: "Science Bee - Email Verification",
        text: `Please verify your email by clicking this link: ${verificationUrl}\n\nThis link will expire in 10 minutes.\n\nIf you didn't request this verification, please ignore this email.`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome to Science Bee!</h2>
          <p>Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" 
               style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Verify Email Address
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">
            This link will expire in 10 minutes.
          </p>
          <p style="color: #666; font-size: 14px;">
            If you didn't request this verification, please ignore this email.
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">
            This is an automated message from Science Bee. Please do not reply to this email.
          </p>
        </div>
      `,
    };
    await transport.sendMail(mailOptions);
};
exports.sendVerificationEmail = sendVerificationEmail;
const generateAuthCookie = (userId, res) => {
    const accessToken = (0, jwt_service_1.generateToken)(userId.toString());
    res.cookie(env_1.env.AUTH_COOKIE_NAME, accessToken, constants_1.cookieOptions);
};
exports.generateAuthCookie = generateAuthCookie;
//# sourceMappingURL=auth.service.js.map