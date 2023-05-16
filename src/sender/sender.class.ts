import Axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { IConfig, IResponse, IResponseError, ResponseStatusCode, defaultApiUrl, defaultApiVersion } from "../common";
import { ISender } from "./interfaces";

export class Sender {
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

    createSenderId(senderName: string): Promise<IResponse<ISender | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/sender`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'POST',
                url,
                data: {
                    senderName
                }
            }

            this.axios.request(options).then(function (res) {

                const result: IResponse<ISender, undefined> = {
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



    retrieveBySenderId(senderId: number): Promise<IResponse<ISender | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/sender?id=${senderId}`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'GET',
                url,
            }

            this.axios.request(options).then(function (res) {

                const result: IResponse<ISender, undefined> = {
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


    retrieveAll(): Promise<IResponse<ISender[] | undefined, IResponseError | undefined>> {
        const url = `${this.ApiUrl}/${this.ApiVersion}/sender`;
        return new Promise((resolve) => {
            const options: AxiosRequestConfig<any> = {
                method: 'GET',
                url,

            }

            this.axios.request(options).then(function (res) {

                const result: IResponse<ISender[], undefined> = {
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
            console.log(config);

            return config;
        });
    }
}