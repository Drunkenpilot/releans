import dotenv from "dotenv"
import { IConfig } from "../common";
import { IOTPSendData, IOTPVerifyData } from "../otp/interfaces";
import { OTP } from "../otp";

dotenv.config()

export class OTPTest {

    async send() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const data: IOTPSendData = {
            sender: 'xx',
            mobile: '',
        };
        const otp = new OTP(config);
        const result = await otp.send(data);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        }

        if (result.error) {
            console.log(result);
        }
    }

    async verify() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const data: IOTPVerifyData = {
            mobile: 'xx',
            code: '123456'
        };
        const otp = new OTP(config);
        const result = await otp.verify(data);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        }

        if (result.error) {
            console.log(result);
        }
    }

}