import { z } from 'zod'
import { AmenityCountOutputTypeSelectObjectSchema } from './AmenityCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => AmenityCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const AmenityCountOutputTypeArgsObjectSchema = Schema
