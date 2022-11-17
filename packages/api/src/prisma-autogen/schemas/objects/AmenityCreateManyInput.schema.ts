import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict()

export const AmenityCreateManyInputObjectSchema = Schema
