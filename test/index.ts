import { BalanceTest } from "./balance.test";
import { SenderTest } from "./sender.test";
import { SMSTest } from "./sms.test";

/**
 * @Balance
 */
const balance = new BalanceTest();
// balance.retrieve();

/**
 * @sender
 */
const sender = new SenderTest();
// sender.retrieveAll();
// sender.retrieveBySenderId();
// sender.createSenderId();

/**
 * @SMS
 */
const sms = new SMSTest();
// sms.retrieveAll();
// sms.retrieveByDate();
// sms.retrieveByMessageId();
// sms.send();
// sms.batchSend();
