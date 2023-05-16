import { ResponseStatusCode } from "./response.status.interface";

export interface IResponseError {
    /**
     * @type string
     * @description error code
     * @example 0 
     */
    code: any;
    /**
     * @type number
     * @description 
     * @example: 401
     */
    status: ResponseStatusCode | number;
    /**
     * @type string
     * @description Your request was made with invalid credentials.
     * @example:  
    */
    message: string;
    /**
     * @type string
     * @description error name 
     * @example Unauthorized
     */
    name?: string;
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



export interface IResponse<T, Y> {
    success?: boolean;
    status: ResponseStatusCode;
    data?: T;
    error?: Y;
}

