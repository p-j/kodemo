import { z } from 'zod'
import { PropertySelectObjectSchema } from './PropertySelect.schema'
import { PropertyIncludeObjectSchema } from './PropertyInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyArgs> = z
  .object({
    select: z.lazy(() => PropertySelectObjectSchema).optional(),
    include: z.lazy(() => PropertyIncludeObjectSchema).optional(),
  })
  .strict()

export const PropertyArgsObjectSchema = Schema
