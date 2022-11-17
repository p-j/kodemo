import { z } from 'zod'
import { PropertyCountOutputTypeSelectObjectSchema } from './PropertyCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => PropertyCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const PropertyCountOutputTypeArgsObjectSchema = Schema
