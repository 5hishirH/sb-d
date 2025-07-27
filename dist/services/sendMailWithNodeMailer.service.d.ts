interface MailOptions {
    to: string;
    subject: string;
    text: string;
    html?: string;
}
export declare const sendMailWithNodeMailer: (options: MailOptions) => Promise<void>;
export {};
//# sourceMappingURL=sendMailWithNodeMailer.service.d.ts.map