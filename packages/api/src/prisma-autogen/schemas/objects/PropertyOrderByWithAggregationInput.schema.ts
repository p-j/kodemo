import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PropertyCountOrderByAggregateInputObjectSchema } from './PropertyCountOrderByAggregateInput.schema'
import { PropertyAvgOrderByAggregateInputObjectSchema } from './PropertyAvgOrderByAggregateInput.schema'
import { PropertyMaxOrderByAggregateInputObjectSchema } from './PropertyMaxOrderByAggregateInput.schema'
import { PropertyMinOrderByAggregateInputObjectSchema } from './PropertyMinOrderByAggregateInput.schema'
import { PropertySumOrderByAggregateInputObjectSchema } from './PropertySumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyOrderByWithAggregationInput> = z
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
    _count: z.lazy(() => PropertyCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PropertyAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PropertyMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PropertyMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PropertySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PropertyOrderByWithAggregationInputObjectSchema = Schema
