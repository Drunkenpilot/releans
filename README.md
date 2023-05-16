# [![Releans Logo](https://releans.com/img/logos/logo-57.png) Releans](https://releans.com/)
A node library to implement Releans SMS API.
License MIT

***

### Releans [Docs](https://docs.releans.com/)

***

### SMS API
#### Send Single Message

#### Send multiple Message

### Balance API
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