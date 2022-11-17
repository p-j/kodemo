import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PictureCountOrderByAggregateInputObjectSchema } from './PictureCountOrderByAggregateInput.schema'
import { PictureAvgOrderByAggregateInputObjectSchema } from './PictureAvgOrderByAggregateInput.schema'
import { PictureMaxOrderByAggregateInputObjectSchema } from './PictureMaxOrderByAggregateInput.schema'
import { PictureMinOrderByAggregateInputObjectSchema } from './PictureMinOrderByAggregateInput.schema'
import { PictureSumOrderByAggregateInputObjectSchema } from './PictureSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    src: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PictureCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PictureAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PictureMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PictureMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PictureSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PictureOrderByWithAggregationInputObjectSchema = Schema
