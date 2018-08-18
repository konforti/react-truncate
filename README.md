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
<Truncate truncFrom="middle">{text}</Truncate>
```

```js
<Truncate lines={3}>{text}</Truncate>
```

```js
<Truncate ellipsis=">>> " truncFrom="start">
    {text}
</Truncate>
```

```js
<Truncate
    onTruncate={truncated => {
        if (truncated) {
            setState({ truncated: true });
        }
    }}
>
    {text}
</Truncate>
```
