import dotenv from "dotenv"
import { IConfig } from "../src/common";
import { Sender } from "../src/sender";
import { SMS } from "../src/sms";
import { IMessageData } from "../src/sms/interfaces";

dotenv.config()

export class SMSTest {

    async retrieveAll() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';

        const sms = new SMS(config);
        const result = await sms.retrieveAll();

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }

    async retrieveByDate() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const date = '2023-05-09';
        const sms = new SMS(config);
        const result = await sms.retrieveByDate(date);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }

    async retrieveByMessageId() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const messageId = 10188636;
        const sms = new SMS(config);
        const result = await sms.retrieveByMessageId(messageId);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }

    async send() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const data: IMessageData = {
            sender: 'XX',
            mobile: '',
            content: 'Your code is XXXX'
        };
        const sms = new SMS(config);
        const result = await sms.send(data);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }

    async batchSend() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const data: IMessageData = {
            sender: 'XX',
            mobile: '',
            content: 'Your code is XXXX'
        };
        const sms = new SMS(config);
        const result = await sms.send(data);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }

}