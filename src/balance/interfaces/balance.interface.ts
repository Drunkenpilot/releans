export interface IBalance {
    /**
     * @description Payment type
     * @example 'prepaid'
     */
    payment: string;
    /**
     * @description Currency used
     * @example USD
     */
    currency: string;
    /**
     * @description Account balance
     * @example '0.545'
     */
    balance: string;
}