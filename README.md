# ✂️ React Truncate

## ✨ Features

-   Truncate text by number of lines.
-   Truncate form end, start or middle.
-   Responsive truncation.
-   Get notified if a text has been truncated or not.
-   Custom ellipsis.

## 🔧 Installation

```bash
npm i -S @konforti/react-truncate
```

```bash
yarn add @konforti/react-truncate
```

## 🔧 Usage

```js
import Truncate from '@konforti/react-truncate';
```

## 🔦 Examples

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
