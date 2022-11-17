import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ListingCountOrderByAggregateInputObjectSchema } from './ListingCountOrderByAggregateInput.schema'
import { ListingAvgOrderByAggregateInputObjectSchema } from './ListingAvgOrderByAggregateInput.schema'
import { ListingMaxOrderByAggregateInputObjectSchema } from './ListingMaxOrderByAggregateInput.schema'
import { ListingMinOrderByAggregateInputObjectSchema } from './ListingMinOrderByAggregateInput.schema'
import { ListingSumOrderByAggregateInputObjectSchema } from './ListingSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    from: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    utilities: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ListingCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ListingAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ListingMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ListingMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ListingSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ListingOrderByWithAggregationInputObjectSchema = Schema
