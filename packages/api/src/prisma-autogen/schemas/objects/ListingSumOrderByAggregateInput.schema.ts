import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingSumOrderByAggregateInput> = z
  .object({
    price: z.lazy(() => SortOrderSchema).optional(),
    utilities: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const ListingSumOrderByAggregateInputObjectSchema = Schema
