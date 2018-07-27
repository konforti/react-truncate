# react-truncate

> Truncate text by number of lines.

> Truncate form end, start or middle.

> Custom ellipsis chars.

## Installation

```bash
npm i -S @konforti/react-truncate
```

```bash
yarn add @konforti/react-truncate
```

## Usage

```js
import Truncate from '@konforti/react-truncate';
```

```js
<Truncate truncFrom="middle" longText={text} />
```

```js
<Truncate lines={3} longText={text}
```

```js
<Truncate ellipsis="->" longText={text} />
```

```js
<Truncate
    longText={text}
    onTruncate={
        {text: string, truncated: boolean}) => {
            if (truncated) {
                // ... show tooltip with orig text ...
            }
        }
    }
/>
```
