<h1 align="center">GGUF.js</h1>

<h3 align="center">Download, manage, and run Llama GGUF files easily with <a href="https://faraday.dev">Faraday.dev</a></h3>

![gguf](https://github.com/Oblomov/clinfo/assets/6139501/748f2773-1b4f-4d55-9353-6fb68b7bf603)

A Javascript library (with Typescript types) to parse metadata for [GGML](https://github.com/ggerganov/ggml)-based GGUF files.

Supported Architectures

- `Llama`
- `MPT`
- `GPTNeoX`
- `GPTJ`
- `GPT2`
- `Bloom`
- `Falcon`
- `RWKV`
- `Gemma`

This library goal is to be 1-to-1 with [the spec](https://github.com/philpax/ggml/blob/gguf-spec/docs/gguf.md). PRs welcome!

## Install

```sh
yarn add gguf
```

or

```sh
npm install gguf
```

## Usage

```ts
import gguf, { isLLamaMetadata } from 'gguf'

// pass in a file path, gguf.js will only load in what is needed for the metadata
// not the whole file
const { metadata, error } = await gguf('./llama2.gguf')

if (error) {
  throw error
}

// helper function to give full type safety
// see more in `src/index.ts`
if (isLLamaMetadata(metadata)) {
  console.log(`context length: ${metadata.llama.context_length}`)
}
```

## TypeScript

Typescript is supported by default and all definitions are in [`src/metadataTypes`](https://github.com/ahoylabs/gguf.js/blob/main/src/metadataTypes.ts)

## License

MIT © [Ahoy Labs, Inc.](https://faraday.dev)
