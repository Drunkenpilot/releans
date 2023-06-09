# [![Releans Logo](https://releans.com/img/logos/logo-57.png) Releans](https://releans.com/)
A node library to implement Releans SMS API.
License MIT

***

### Releans [Docs](https://docs.releans.com/)

***

### Installation

```javascript
npm i releans
```

***

### SMS API
[Read doc](https://docs.releans.com/sms-api)
#### Send a message
```typescript
        import { SMS } from 'releans';
        const config: IConfig = {
            apiKey: 'your-key',
        }
        const data: IMessageData = {
            sender: 'SenderName',
            mobile: 'E164FormatNumber',
            content: 'Your content'
        };
        const sms = new SMS(config);
        const result = await sms.send(data);

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```
#### Retrieve all messages
```typescript
        import { SMS } from 'releans';
        const config: IConfig = {
            apiKey: 'your-key',
        }
 
        const sms = new SMS(config);
        const result = await sms.retrieveAll();

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```

#### Retrieve messages by date
```typescript
        import { SMS } from 'releans';
        const config: IConfig = {
            apiKey: 'your-key',
        }
        const date = '2023-05-16' //'yyyy-MM-dd'
        const sms = new SMS(config);
        const result = await sms.retrieveByDate(date);

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```

#### Retrieve a message by messageId
```typescript
        import { SMS } from 'releans';
        const config: IConfig = {
            apiKey: 'your-key',
        }
        const messageId = 12345678
        const sms = new SMS(config);
        const result = await sms.retrieveByMessageId(messageId);

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```

***

### OTP / Verify API
[Read doc](https://docs.releans.com/verify)
#### Send OTP Code
```typescript
        import { OTP } from 'releans';
        const config: IConfig = {
            apiKey: 'your-key',
        }
         const data: IOTPSendData = {
            sender: 'Sender Name',
            mobile: 'E164FormatNumber',
            channel: 'sms' // sms or voice
        };
        const otp = new OTP(config);
        const result = await otp.send(data);

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```
#### Verify OTP Code
```typescript
        import { OTP } from 'releans';
        const config: IConfig = {
            apiKey: 'your-key',
        }
         const data: IOTPVerifyData = {
            mobile: 'E164FormatNumber',
            code: '123456'
        };
        const otp = new OTP(config);
        const result = await otp.verify(data);

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```

***

### Balance API
[Read doc](https://docs.releans.com/balance)
```typescript
        import { Balance } from 'releans';
        const config: IConfig = {
            apiKey: 'your-key',
        }
 
        const balance = new Balance(config);
        const result = await balance.retrieve();

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```

### Bug report
<https://github.com/Drunkenpilot/releans/issues>