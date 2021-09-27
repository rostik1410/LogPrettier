# Console logs Prettier

### Instalation:

    npm i log-prettier

### Using:

```js
import { logger } from 'log-prettier';

logger.info('SomeParams', someParams);
logger.debug('SomeParams', someParams);
logger.warn('SomeParams', someParams);
logger.error('SomeParams', someParams);
```

Supporting any params count and format same which console logs.

### Customization:

###### Custom Config:

| Params               | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| infoBackgroundColor  | Background color for info label (supports HTML/CSS color names, hex, and rgba colors)  |
| infoTitle            | Text for info label (could contain emoji)                                              |
| debugBackgroundColor | Background color for debug label (supports HTML/CSS color names, hex, and rgba colors) |
| debugTitle           | Text for debug label (could contain emoji)                                             |
| warnBackgroundColor  | Background color for warn label (supports HTML/CSS color names, hex, and rgba colors)  |
| warnTitle            | Text for warn label (could contain emoji)                                              |
| errorBackgroundColor | Background color for error label (supports HTML/CSS color names, hex, and rgba colors) |
| errorTitle           | Text for error label (could contain emoji)                                             |
| errorTracebackOn     | Show error traceback as console.error or just show data (default is true)              |

###### Using:

```js
import { logger } from 'log-prettier';

logger.init({
	someParam: customValue,
});
```

#### Preview:

![alt text](./example.png?raw=true)

```

```
