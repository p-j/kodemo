import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityCountOutputTypeSelect> = z
  .object({
    properties: z.boolean().optional(),
  })
  .strict()

export const AmenityCountOutputTypeSelectObjectSchema = Schema
