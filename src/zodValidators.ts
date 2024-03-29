// Generated by ts-to-zod
import { z } from 'zod'

export const architectureTypeSchema = z.union([
  z.literal('llama'),
  z.literal('mpt'),
  z.literal('gptneox'),
  z.literal('gptj'),
  z.literal('gpt2'),
  z.literal('bloom'),
  z.literal('falcon'),
  z.literal('gemma'),
  z.literal('rwkv'),
])

export const baseGGUFMetadataSchema = z.object({
  alignment: z.number().optional(),
  author: z.string().optional(),
  description: z.string().optional(),
  file_type: z
    .union([
      z.literal('ALL_F32'),
      z.literal('MOSTLY_F16'),
      z.literal('MOSTLY_Q4_0'),
      z.literal('MOSTLY_Q4_1'),
      z.literal('MOSTLY_Q4_1_SOME_F16'),
      z.literal('MOSTLY_Q4_2'),
      z.literal('MOSTLY_Q4_3'),
      z.literal('MOSTLY_Q8_0'),
      z.literal('MOSTLY_Q5_0'),
      z.literal('MOSTLY_Q5_1'),
      z.literal('MOSTLY_Q2_K'),
      z.literal('MOSTLY_Q3_K_S'),
      z.literal('MOSTLY_Q3_K_M'),
      z.literal('MOSTLY_Q3_K_L'),
      z.literal('MOSTLY_Q4_K_S'),
      z.literal('MOSTLY_Q4_K_M'),
      z.literal('MOSTLY_Q5_K_S'),
      z.literal('MOSTLY_Q5_K_M'),
      z.literal('MOSTLY_Q6_K'),
      z.literal('MOSTLY_IQ2_XXS'),
      z.literal('MOSTLY_IQ2_XS'),
      z.literal('MOSTLY_Q2_K_S'),
      z.literal('MOSTLY_Q3_K_XS'),
      z.literal('MOSTLY_IQ3_XXS'),
    ])
    .optional(),
  license: z.string().optional(),
  name: z.string().optional(),
  quantization_version: z.number().optional(),
  source: z
    .object({
      huggingface: z
        .object({
          repository: z.string().optional(),
        })
        .optional(),
      url: z.string().optional(),
    })
    .optional(),
  url: z.string().optional(),
})

export const llamaMetadataSchema = z.object({
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('llama'),
    }),
  ),
  llama: z.object({
    attention: z.object({
      head_count: z.number(),
      head_count_kv: z.number().optional(),
      layer_norm_rms_epsilon: z.number(),
    }),
    context_length: z.number(),
    embedding_length: z.number(),
    feed_forward_length: z.number(),
    layer_count: z.number().optional(),
    rope: z.object({
      dimension_count: z.number(),
      freq_base: z.number().optional(),
      scale: z.number().optional(),
      scale_linear: z.number().optional(),
    }),
    tensor_data_layout: z.string().optional(),
  }),
})

export const mPTMetadataSchema = z.object({
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('mpt'),
    }),
  ),
  mpt: z.object({
    attention: z.object({
      alibi_bias_max: z.number(),
      clip_kqv: z.number(),
      head_count: z.number(),
      layer_norm_epsilon: z.number(),
    }),
    context_length: z.number(),
    embedding_length: z.number(),
    layer_count: z.number(),
  }),
})

export const gPTNeoXMetadataSchema = z.object({
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('gptneox'),
    }),
  ),
  gptneox: z.object({
    attention: z.object({
      head_count: z.number(),
      layer_norm_epsilon: z.number(),
    }),
    context_length: z.number(),
    embedding_length: z.number(),
    layer_count: z.number(),
    rope: z.object({
      dimension_count: z.number(),
      scale: z.number().optional(),
    }),
    use_parallel_residual: z.boolean(),
  }),
})

export const gPTJMetadataSchema = z.object({
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('gptj'),
    }),
  ),
  gptj: z.object({
    attention: z.object({
      head_count: z.number(),
      layer_norm_epsilon: z.number(),
    }),
    context_length: z.number(),
    embedding_length: z.number(),
    layer_count: z.number(),
    rope: z.object({
      dimension_count: z.number(),
      scale: z.number().optional(),
    }),
  }),
})

export const gPT2MetadataSchema = z.object({
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('gpt2'),
    }),
  ),
  gpt2: z.object({
    attention: z.object({
      head_count: z.number(),
      layer_norm_epsilon: z.number(),
    }),
    context_length: z.number(),
    embedding_length: z.number(),
    layer_count: z.number(),
  }),
})

export const bloomMetadataSchema = z.object({
  bloom: z.object({
    attention: z.object({
      head_count: z.number(),
      layer_norm_epsilon: z.number(),
    }),
    context_length: z.number(),
    embedding_length: z.number(),
    feed_forward_length: z.number(),
    layer_count: z.number(),
  }),
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('bloom'),
    }),
  ),
})

export const falconMetadataSchema = z.object({
  falcon: z.object({
    attention: z.object({
      head_count: z.number(),
      head_count_kv: z.number(),
      layer_norm_epsilon: z.number(),
      use_norm: z.boolean(),
    }),
    context_length: z.number(),
    embedding_length: z.number(),
    layer_count: z.number(),
    tensor_data_layout: z.string().optional(),
  }),
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('falcon'),
    }),
  ),
})

export const rWKVMetadataSchema = z.object({
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('rwkv'),
    }),
  ),
  rwkv: z.object({
    architecture_version: z.number(),
    context_length: z.number(),
    embedding_length: z.number(),
    feed_forward_length: z.number(),
    layer_count: z.number(),
  }),
})

export const gemmaMetadataSchema = z.object({
  gemma: z.object({
    attention: z.object({
      head_count: z.number(),
      head_count_kv: z.number().optional(),
      layer_norm_rms_epsilon: z.number(),
    }),
    block_count: z.number(),
    context_length: z.number(),
    embedding_length: z.number(),
    feed_forward_length: z.number(),
  }),
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('gemma'),
    }),
  ),
})

export const whisperMetadataSchema = z.object({
  general: baseGGUFMetadataSchema.and(
    z.object({
      architecture: z.literal('whisper'),
    }),
  ),
  whisper: z.object({
    decoder: z.object({
      attention: z.object({
        head_count: z.number(),
      }),
      context_length: z.number(),
      embedding_length: z.number(),
      layer_count: z.number(),
    }),
    encoder: z.object({
      attention: z.object({
        head_count: z.number(),
      }),
      context_length: z.number(),
      embedding_length: z.number(),
      layer_count: z.number(),
      mels_count: z.number(),
    }),
  }),
})

export const gGUFMetadataSchema = z.union([
  llamaMetadataSchema,
  mPTMetadataSchema,
  gPTNeoXMetadataSchema,
  gPTJMetadataSchema,
  gPT2MetadataSchema,
  bloomMetadataSchema,
  falconMetadataSchema,
  gemmaMetadataSchema,
  rWKVMetadataSchema,
  whisperMetadataSchema,
])
