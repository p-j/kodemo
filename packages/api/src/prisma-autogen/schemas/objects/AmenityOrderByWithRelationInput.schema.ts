import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PropertyOrderByRelationAggregateInputObjectSchema } from './PropertyOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    properties: z.lazy(() => PropertyOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AmenityOrderByWithRelationInputObjectSchema = Schema
