import { z } from 'zod'
import { PropertyWhereInputObjectSchema } from './PropertyWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyRelationFilter> = z
  .object({
    is: z.lazy(() => PropertyWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PropertyWhereInputObjectSchema).optional(),
  })
  .strict()

export const PropertyRelationFilterObjectSchema = Schema
