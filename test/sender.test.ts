import dotenv from "dotenv"
import { IConfig } from "../src/common";
import { Sender } from "../src/sender";

dotenv.config()

export class SenderTest {

    async retrieveAll() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';

        const sender = new Sender(config);
        const result = await sender.retrieveAll();

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }

    async retrieveBySenderId() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const senderId = 20656;
        const sender = new Sender(config);
        const result = await sender.retrieveBySenderId(senderId);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }
    async createSenderId() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';
        const senderName = 'KuaiDi';
        const sender = new Sender(config);
        const result = await sender.createSenderId(senderName);

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }
    }

}