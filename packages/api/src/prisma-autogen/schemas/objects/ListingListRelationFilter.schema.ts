import { z } from 'zod'
import { ListingWhereInputObjectSchema } from './ListingWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingListRelationFilter> = z
  .object({
    every: z.lazy(() => ListingWhereInputObjectSchema).optional(),
    some: z.lazy(() => ListingWhereInputObjectSchema).optional(),
    none: z.lazy(() => ListingWhereInputObjectSchema).optional(),
  })
  .strict()

export const ListingListRelationFilterObjectSchema = Schema
