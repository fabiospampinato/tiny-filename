# Tiny Filename

A tiny isomorphic ESM alternative to Node's "__filename" global.

## Install

```sh
npm install --save tiny-filename
```

## Usage

```ts
import filename from 'tiny-filename';

filename ( import.meta.url ); // => '/path/to/file.ts'
```

## License

MIT © Fabio Spampinato
