export interface ISMS {
    api_version: string,
    id: number;
    /**
     * @description Sender Name
     */
    from: string;
    /**
     * @description E164 Mobile number
     */
    to: string;
    /**
     * @description Country Name
     * @example Belgium
     */
    region: string;
    /**
     * @description ISP Name
     * @example Telenet
     */
    operator: string;
    /**
     * @description Content of message
     */
    content: string;
    /**
     * @example '2023-03-27 02:33:16 pm'
     */
    date_created: string;
    /**
     * @example '2023-03-27 02:33:21 pm',
     */
    date_sent: string;
    /**
     * @example 'delivered'
     */
    status: string;
    /**
     * @example 'The SMS was sent and it was delivered to its recipient.'
     */
    status_description: string;
    /**
     * @example 'Europe/Brussels'
     */
    timezone: string;
    /**
     * @example 0.033
     */
    price: number;
    /**
     * @description Currency
     * @example 'USD'
     */
    price_unit: string;
    flag: null
}

export interface IMessageSentReport {
    api_version: string,
    id: number;
    /**
     * @description Sender Name
     */
    from: string;
    /**
     * @description E164 Mobile number
     */
    to: string;
    /**
     * @description Country Name
     * @example Belgium
     */
    region: string;
    /**
     * @description ISP Name
     * @example Telenet , Proximus
     */
    operator: string;
    /**
     * @description Content of message
     */
    content: string;
    /**
     * @example '2023-03-27 02:33:16 pm'
     */
    date_created: string;
    /**
     * @example '2023-03-27 02:33:21 pm',
     */
    date_sent: string;
    /**
     * @example 'delivered', 'sent'
     */
    dlr_status: string;
    /**
     * @example 'The SMS was sent and it was delivered to its recipient.'
     */
    status_description: string;
    /**
     * @example 'Europe/Brussels'
     */
    timezone: string;
    /**
     * @example 0.033
     */
    price: number;
    /**
     * @description Currency
     * @example 'USD'
     */
    price_unit: string;
    flag: null
    code: number;
    status: number;
}


export interface IMessageData {
    /**
     * @description Sender (from) to send the message Ex. Releans Sender ID must be registered in your account.
     * @description You can register your company name as Sender ID from New Sender form in the dashboard
     * @requires true
     */
    sender: string;
    /**
     * @description Format mobile number with a + and a country code, (E.164 format).
     * @example A US number would have the format +14155550101. A UK number would have the format +447700900123.
     * @example when batch send '+14155550101,+447700900123'
     * @requires true
     */
    mobile: string;
    /**
     * @description Your Message text. Each SMS message can hold a maximum of 160 characters including spaces, 
     * @example the maximum number of characters you can write down is 1377 (around 8 SMS).
     * @requires true
     */
    content: string;
}