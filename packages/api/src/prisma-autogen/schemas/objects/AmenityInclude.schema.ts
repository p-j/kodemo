import { z } from 'zod'
import { PropertyFindManySchema } from '../findManyProperty.schema'
import { AmenityCountOutputTypeArgsObjectSchema } from './AmenityCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityInclude> = z
  .object({
    properties: z.union([z.boolean(), z.lazy(() => PropertyFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => AmenityCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const AmenityIncludeObjectSchema = Schema
