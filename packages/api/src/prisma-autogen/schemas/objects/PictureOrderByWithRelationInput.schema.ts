import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PropertyOrderByWithRelationInputObjectSchema } from './PropertyOrderByWithRelationInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    src: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    property: z.lazy(() => PropertyOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PictureOrderByWithRelationInputObjectSchema = Schema
