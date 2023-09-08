import { writeFile } from 'fs-extra'
import path from 'path'

import gguf, { isLlamaMetadata } from '../src/index'

// we would like to add more tests, if you reading this, please help!

const fetchPartialFile = async (url: string, start: number, end: number) => {
  const response = await fetch(url, {
    headers: {
      Range: `bytes=${start}-${end}`,
    },
  })
  return response.arrayBuffer()
}

describe('gguf', () => {
  it(
    'Llama-2-7b-Chat-GGUF ',
    async () => {
      const file = await fetchPartialFile(
        'https://huggingface.co/TheBloke/Llama-2-7b-Chat-GGUF/resolve/main/llama-2-7b-chat.Q2_K.gguf',
        0,
        // 10mb
        1024 * 1024 * 10,
      )

      const fileName = path.join(
        __dirname,
        'models',
        'llama-2-7b-chat.Q2_K.gguf',
      )

      await writeFile(fileName, Buffer.from(file))

      const { error, metadata } = await gguf(fileName)

      expect(error).toBe(undefined)
      expect(metadata).not.toBe(undefined)
      if (!metadata) return // for types

      expect(metadata.general.architecture).toBe('llama')
      if (!isLlamaMetadata(metadata)) return // for types

      expect(metadata.llama).toBeTruthy()

      expect(metadata).toEqual({
        general: {
          architecture: 'llama',
          file_type: 'MOSTLY_Q2_K',
          name: 'LLaMA v2',
          quantization_version: 2,
        },
        llama: {
          attention: {
            head_count: 32,
            head_count_kv: 32,
            layer_norm_rms_epsilon: 9.999999974752427e-7,
          },
          context_length: 4096,
          embedding_length: 4096,
          feed_forward_length: 11008,
          rope: {
            dimension_count: 128,
          },
        },
      })
    },
    1000 * 30,
  )
})
