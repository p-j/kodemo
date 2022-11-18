import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    src: z.string(),
  })
  .strict()

export const FileCreateManyInputObjectSchema = Schema
