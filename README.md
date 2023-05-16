# [![Releans Logo](https://releans.com/img/logos/logo-57.png) Releans](https://releans.com/)
A node library to implement Releans SMS API.
License MIT

***

### Releans [Docs](https://docs.releans.com/)

***

### SMS API
[Read doc](https://docs.releans.com/sms-api)
#### Send a message
```typescript
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

### Balance API
[Read doc](https://docs.releans.com/balance)
```typescript
        const config: IConfig = {
            apiKey: 'your-key',
        }
 
        const barcode = new Balance(config);
        const result = await barcode.retrieve();

        if (result.data) {
            console.dir(result.data)
        }

        if(result.error) {
            console.log(result.error);
        }
```