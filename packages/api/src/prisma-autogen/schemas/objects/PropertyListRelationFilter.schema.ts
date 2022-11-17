import { z } from 'zod'
import { PropertyWhereInputObjectSchema } from './PropertyWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyListRelationFilter> = z
  .object({
    every: z.lazy(() => PropertyWhereInputObjectSchema).optional(),
    some: z.lazy(() => PropertyWhereInputObjectSchema).optional(),
    none: z.lazy(() => PropertyWhereInputObjectSchema).optional(),
  })
  .strict()

export const PropertyListRelationFilterObjectSchema = Schema
