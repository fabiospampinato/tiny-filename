# Tiny Filename

A tiny isomorphic ESM alternative to Node's "__filename" global.

## Install

```sh
npm install tiny-filename
```

## Usage

```ts
import filename from 'tiny-filename';

// Let's convert a file URL to a file path

filename ( import.meta.url ); // => '/path/to/file.ts'
```

## License

MIT © Fabio Spampinato
