import { BalanceTest } from "./balance.test";
import { SenderTest } from "./sender.test";

/**
 * @Balance
 */
const balance = new BalanceTest();
// balance.retrieve();

/**
 * @sender
 */
const sender = new SenderTest();
sender.retrieveAll();
// sender.retrieveBySenderId();
// sender.createSenderId();