import { z } from 'zod'
import { ListingWhereInputObjectSchema } from './objects/ListingWhereInput.schema'
import { ListingOrderByWithRelationInputObjectSchema } from './objects/ListingOrderByWithRelationInput.schema'
import { ListingWhereUniqueInputObjectSchema } from './objects/ListingWhereUniqueInput.schema'
import { ListingCountAggregateInputObjectSchema } from './objects/ListingCountAggregateInput.schema'
import { ListingMinAggregateInputObjectSchema } from './objects/ListingMinAggregateInput.schema'
import { ListingMaxAggregateInputObjectSchema } from './objects/ListingMaxAggregateInput.schema'
import { ListingAvgAggregateInputObjectSchema } from './objects/ListingAvgAggregateInput.schema'
import { ListingSumAggregateInputObjectSchema } from './objects/ListingSumAggregateInput.schema'

export const ListingAggregateSchema = z.object({
  where: ListingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([ListingOrderByWithRelationInputObjectSchema, ListingOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: ListingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ListingCountAggregateInputObjectSchema]).optional(),
  _min: ListingMinAggregateInputObjectSchema.optional(),
  _max: ListingMaxAggregateInputObjectSchema.optional(),
  _avg: ListingAvgAggregateInputObjectSchema.optional(),
  _sum: ListingSumAggregateInputObjectSchema.optional(),
})
