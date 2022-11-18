import { z } from 'zod'
import { AmenityWhereInputObjectSchema } from './objects/AmenityWhereInput.schema'
import { AmenityOrderByWithRelationInputObjectSchema } from './objects/AmenityOrderByWithRelationInput.schema'
import { AmenityWhereUniqueInputObjectSchema } from './objects/AmenityWhereUniqueInput.schema'
import { AmenityCountAggregateInputObjectSchema } from './objects/AmenityCountAggregateInput.schema'
import { AmenityMinAggregateInputObjectSchema } from './objects/AmenityMinAggregateInput.schema'
import { AmenityMaxAggregateInputObjectSchema } from './objects/AmenityMaxAggregateInput.schema'

export const AmenityAggregateSchema = z.object({
  where: AmenityWhereInputObjectSchema.optional(),
  orderBy: z
    .union([AmenityOrderByWithRelationInputObjectSchema, AmenityOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: AmenityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), AmenityCountAggregateInputObjectSchema]).optional(),
  _min: AmenityMinAggregateInputObjectSchema.optional(),
  _max: AmenityMaxAggregateInputObjectSchema.optional(),
})
