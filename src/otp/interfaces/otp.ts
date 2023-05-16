

export interface IOTPSendData {
    /**
     * @description Sender (from) to send the message Ex. Releans Sender ID must be registered in your account.
     * @description You can register your company name as Sender ID from New Sender form in the dashboard
     * @requires true
     */
    sender: string;
    /**
     * @description Format mobile number with a + and a country code, (E.164 format).
     * @example A US number would have the format +14155550101. A UK number would have the format +447700900123.
     * @requires true
     */
    mobile: string;
    /**
     * @description The type of message. Values can be: SMS, VOICE
     * @enum  'sms', 'voice'
     * @default sms
     */
    channel?: 'sms' | 'voice';
}

export interface IOTPVerifyData {
    /**
     * @description Format mobile number with a + and a country code, (E.164 format).
     * @example A US number would have the format +14155550101. A UK number would have the format +447700900123.
     * @requires true
     */
    mobile: string;
    /**
     * @description An unique code which was sent to the recipient upon sent OTP.
     * @requires true
     */
    code: string;
}

export interface IOTPSentReport {
    /**
     * @example "Your message sent."
     */
    message: string;
    code: number;
    status: number;
}

export interface IOTPVerifyReport {
    /**
     * @example "Your message sent."
     */
    message: string;
    code: number;
    status: number;
    /**
     * @description Format mobile number with a + and a country code, (E.164 format).
     */
    mobile?: string;
    /**
     * @type string
     * @description Accepted format
     * @example +16175551212
     */
    accepted_format?: string;
    /**
     * @type string
     * @description Format description 
     * @example 'Format mobile number with a + and a country code, (E.164 format). e.g, a US number would have the format +14155550101. A UK number would have the format +447700900123.'
     */
    format_description?: string;
}
