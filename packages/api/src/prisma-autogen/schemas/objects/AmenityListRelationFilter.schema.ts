import { z } from 'zod'
import { AmenityWhereInputObjectSchema } from './AmenityWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityListRelationFilter> = z
  .object({
    every: z.lazy(() => AmenityWhereInputObjectSchema).optional(),
    some: z.lazy(() => AmenityWhereInputObjectSchema).optional(),
    none: z.lazy(() => AmenityWhereInputObjectSchema).optional(),
  })
  .strict()

export const AmenityListRelationFilterObjectSchema = Schema
