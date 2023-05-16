import { ResponseStatusCode } from "./response.status.interface";

export interface IResponseError {
    /**
     * @type string
     * @description error code
     * @example 0 
     */
    code: any;
    /**
     * @type string
     * @description error name 
     * @example Unauthorized
     */
    name: string;
    /**
     * @type string
     * @description Your request was made with invalid credentials.
     * @example:  
     */
    message: string;
    /**
     * @type number
     * @description 
     * @example: 401
     */
    status: ResponseStatusCode | number;
}



export interface IResponse<T, Y> {
    success?: boolean;
    status: ResponseStatusCode;
    data?: T;
    error?: Y;
}

