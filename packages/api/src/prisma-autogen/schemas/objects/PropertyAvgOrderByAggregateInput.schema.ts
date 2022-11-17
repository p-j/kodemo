import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyAvgOrderByAggregateInput> = z
  .object({
    roomCount: z.lazy(() => SortOrderSchema).optional(),
    bedroomCount: z.lazy(() => SortOrderSchema).optional(),
    floor: z.lazy(() => SortOrderSchema).optional(),
    floorCount: z.lazy(() => SortOrderSchema).optional(),
    surface: z.lazy(() => SortOrderSchema).optional(),
    totalSurface: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PropertyAvgOrderByAggregateInputObjectSchema = Schema
