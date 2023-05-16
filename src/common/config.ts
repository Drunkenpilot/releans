
export type IConfig = {
    /**
     * @type string
     * @description
     */
    apiKey: string;
    version?: string;
    /**
     * @description Api URL
     * @default 'https://api.releans.com'
     */
    apiUrl?: string;
    /**
     * @description Version of api
     * @default v2
     */
}

export const defaultApiUrl = 'https://api.releans.com';
export const defaultApiVersion = 'v2';