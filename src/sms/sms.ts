import Axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { IConfig, IResponse, IResponseError, ResponseStatusCode, defaultApiUrl, defaultApiVersion } from "../common";
import { ISMS, IMessageData, IMessageSentReport } from "./interfaces";

export class SMS {
    private axios = Axios.create({
        paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    });
    private ApiKey: string;
    private ApiUrl: string;
    private ApiVersion: string;

    constructor(data: IConfig) {
        this.ApiKey = data.apiKey;
        this.ApiUrl = data.apiUrl ?? defaultApiUrl
        this.ApiVersion = data.version ?? defaultApiVersion;
        this.interceptorHandler();
    }

    send(data: IMessageData): Promise<IResponse<IMessageSentReport | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/message`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'POST',
                url,
                data
            }

            this.axios.request(options).then(function (res) {
                const result: IResponse<IMessageSentReport, undefined> = {
                    status: res.status as ResponseStatusCode,
                    success: true,
                    data: res.data
                }

                resolve(result);

            }).catch(function (e) {

                if (e.response) {
                    const result: IResponse<undefined, IResponseError> = {
                        status: e.response.status,
                        error: e.response.data
                    }
                    resolve(result);
                } else {
                    resolve({ status: 500, error: e })
                }
            });
        })
    }


    batchSend(data: IMessageData): Promise<IResponse<IMessageSentReport | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/batch`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'POST',
                url,
                data: qs.stringify(data)
            }

            this.axios.request(options).then(function (res) {
                const result: IResponse<IMessageSentReport, undefined> = {
                    status: res.status as ResponseStatusCode,
                    success: true,
                    data: res.data
                }

                resolve(result);

            }).catch(function (e) {

                if (e.response) {
                    const result: IResponse<undefined, IResponseError> = {
                        status: e.response.status,
                        error: e.response.data
                    }
                    resolve(result);
                } else {
                    resolve({ status: 500, error: e })
                }
            });
        })
    }



    /**
     * 
     * @param messageId number
     * @returns Promise<IResponse<ISMS[] | undefined, IResponseError | undefined>>
     */
    retrieveByMessageId(messageId: number): Promise<IResponse<ISMS | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/message?id=${messageId}`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'GET',
                url,

            }

            this.axios.request(options).then(function (res) {

                const result: IResponse<ISMS, undefined> = {
                    status: res.status as ResponseStatusCode,
                    success: true,
                    data: res.data
                }

                resolve(result);

            }).catch(function (e) {

                if (e.response) {
                    const result: IResponse<undefined, IResponseError> = {
                        status: e.response.status,
                        error: e.response.data
                    }
                    resolve(result);
                } else {
                    resolve({ status: 500, error: e })
                }
            });
        })
    }
    /**
     * 
     * @param date YYYY-MM-DD
     * @returns Promise<IResponse<ISMS[] | undefined, IResponseError | undefined>>
     */
    retrieveByDate(date: string): Promise<IResponse<ISMS[] | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/message?date=${date}`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'GET',
                url,

            }

            this.axios.request(options).then(function (res) {

                const result: IResponse<ISMS[], undefined> = {
                    status: res.status as ResponseStatusCode,
                    success: true,
                    data: res.data
                }

                resolve(result);

            }).catch(function (e) {

                if (e.response) {
                    const result: IResponse<undefined, IResponseError> = {
                        status: e.response.status,
                        error: e.response.data
                    }
                    resolve(result);
                } else {
                    resolve({ status: 500, error: e })
                }
            });
        })
    }

    retrieveAll(): Promise<IResponse<ISMS[] | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/message`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'GET',
                url,

            }

            this.axios.request(options).then(function (res) {

                const result: IResponse<ISMS[], undefined> = {
                    status: res.status as ResponseStatusCode,
                    success: true,
                    data: res.data
                }

                resolve(result);

            }).catch(function (e) {

                if (e.response) {
                    const result: IResponse<undefined, IResponseError> = {
                        status: e.response.status,
                        error: e.response.data
                    }
                    resolve(result);
                } else {
                    resolve({ status: 500, error: e })
                }
            });
        })
    }

    private interceptorHandler() {

        this.axios.interceptors.request.use((config) => {

            if (config?.headers) {
                config.headers.set('Authorization', `Bearer ${this.ApiKey}`);
            }
            // console.log(config);

            return config;
        });
    }
}