import dotenv from "dotenv"
import { IConfig } from "../src/common";
import { Balance } from "../src/balance";

dotenv.config()

export class BalanceTest {

    async retrieve() {
        const config: IConfig = {
            apiKey: 'demo-key',
        }

        const { APIKEY } = process.env;

        config.apiKey = APIKEY ?? '';

        const barcode = new Balance(config);
        const result = await barcode.retrieve();

        if (result.data) {
            console.dir(result, { depth: null, colors: true })
        } else {
            console.log('result', result);
        }

    }

}