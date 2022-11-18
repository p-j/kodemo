import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ProfileCountOrderByAggregateInputObjectSchema } from './ProfileCountOrderByAggregateInput.schema'
import { ProfileMaxOrderByAggregateInputObjectSchema } from './ProfileMaxOrderByAggregateInput.schema'
import { ProfileMinOrderByAggregateInputObjectSchema } from './ProfileMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    region: z.lazy(() => SortOrderSchema).optional(),
    postalCode: z.lazy(() => SortOrderSchema).optional(),
    bio: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ProfileCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProfileMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProfileMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ProfileOrderByWithAggregationInputObjectSchema = Schema
