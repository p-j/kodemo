import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AmenityCountOrderByAggregateInputObjectSchema } from './AmenityCountOrderByAggregateInput.schema'
import { AmenityMaxOrderByAggregateInputObjectSchema } from './AmenityMaxOrderByAggregateInput.schema'
import { AmenityMinOrderByAggregateInputObjectSchema } from './AmenityMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => AmenityCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AmenityMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AmenityMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AmenityOrderByWithAggregationInputObjectSchema = Schema
