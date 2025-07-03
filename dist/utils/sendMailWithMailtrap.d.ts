interface MailOptions {
    to: string;
    subject: string;
    text: string;
    html?: string;
}
export declare const sendMailWithMailtrap: (options: MailOptions) => Promise<void>;
export {};
//# sourceMappingURL=sendMailWithMailtrap.d.ts.map