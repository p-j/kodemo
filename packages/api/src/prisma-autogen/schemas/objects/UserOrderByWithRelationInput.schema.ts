import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema'
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'
import { PropertyOrderByRelationAggregateInputObjectSchema } from './PropertyOrderByRelationAggregateInput.schema'
import { PictureOrderByRelationAggregateInputObjectSchema } from './PictureOrderByRelationAggregateInput.schema'
import { FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema'
import { ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyOrderByRelationAggregateInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureOrderByRelationAggregateInputObjectSchema).optional(),
    files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional(),
    profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
