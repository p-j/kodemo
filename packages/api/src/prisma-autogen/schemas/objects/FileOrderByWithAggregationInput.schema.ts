import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FileCountOrderByAggregateInputObjectSchema } from './FileCountOrderByAggregateInput.schema'
import { FileMaxOrderByAggregateInputObjectSchema } from './FileMaxOrderByAggregateInput.schema'
import { FileMinOrderByAggregateInputObjectSchema } from './FileMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    src: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => FileCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FileMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FileMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const FileOrderByWithAggregationInputObjectSchema = Schema
