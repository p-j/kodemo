import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    roomCount: z.lazy(() => SortOrderSchema).optional(),
    bedroomCount: z.lazy(() => SortOrderSchema).optional(),
    floor: z.lazy(() => SortOrderSchema).optional(),
    floorCount: z.lazy(() => SortOrderSchema).optional(),
    surface: z.lazy(() => SortOrderSchema).optional(),
    totalSurface: z.lazy(() => SortOrderSchema).optional(),
    hasElevator: z.lazy(() => SortOrderSchema).optional(),
    reference: z.lazy(() => SortOrderSchema).optional(),
    rentType: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PropertyMaxOrderByAggregateInputObjectSchema = Schema
