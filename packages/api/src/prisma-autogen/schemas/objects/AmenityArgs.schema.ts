import { z } from 'zod'
import { AmenitySelectObjectSchema } from './AmenitySelect.schema'
import { AmenityIncludeObjectSchema } from './AmenityInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityArgs> = z
  .object({
    select: z.lazy(() => AmenitySelectObjectSchema).optional(),
    include: z.lazy(() => AmenityIncludeObjectSchema).optional(),
  })
  .strict()

export const AmenityArgsObjectSchema = Schema
