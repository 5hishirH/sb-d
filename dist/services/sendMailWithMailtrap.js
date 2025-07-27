"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailWithMailtrap = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});
const sendMailWithMailtrap = async (options) => {
    const mailOptions = {
        from: `Science Bee`,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
    };
    await transport.sendMail(mailOptions);
};
exports.sendMailWithMailtrap = sendMailWithMailtrap;
//# sourceMappingURL=sendMailWithMailtrap.js.map