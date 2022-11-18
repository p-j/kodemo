import { z } from 'zod'
import { ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema'
import { ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema'
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema'
import { ProfileCountAggregateInputObjectSchema } from './objects/ProfileCountAggregateInput.schema'
import { ProfileMinAggregateInputObjectSchema } from './objects/ProfileMinAggregateInput.schema'
import { ProfileMaxAggregateInputObjectSchema } from './objects/ProfileMaxAggregateInput.schema'

export const ProfileAggregateSchema = z.object({
  where: ProfileWhereInputObjectSchema.optional(),
  orderBy: z
    .union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: ProfileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ProfileCountAggregateInputObjectSchema]).optional(),
  _min: ProfileMinAggregateInputObjectSchema.optional(),
  _max: ProfileMaxAggregateInputObjectSchema.optional(),
})
