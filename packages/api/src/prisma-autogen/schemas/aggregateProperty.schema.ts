import { z } from 'zod'
import { PropertyWhereInputObjectSchema } from './objects/PropertyWhereInput.schema'
import { PropertyOrderByWithRelationInputObjectSchema } from './objects/PropertyOrderByWithRelationInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema'
import { PropertyCountAggregateInputObjectSchema } from './objects/PropertyCountAggregateInput.schema'
import { PropertyMinAggregateInputObjectSchema } from './objects/PropertyMinAggregateInput.schema'
import { PropertyMaxAggregateInputObjectSchema } from './objects/PropertyMaxAggregateInput.schema'
import { PropertyAvgAggregateInputObjectSchema } from './objects/PropertyAvgAggregateInput.schema'
import { PropertySumAggregateInputObjectSchema } from './objects/PropertySumAggregateInput.schema'

export const PropertyAggregateSchema = z.object({
  where: PropertyWhereInputObjectSchema.optional(),
  orderBy: PropertyOrderByWithRelationInputObjectSchema.optional(),
  cursor: PropertyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), PropertyCountAggregateInputObjectSchema]).optional(),
  _min: PropertyMinAggregateInputObjectSchema.optional(),
  _max: PropertyMaxAggregateInputObjectSchema.optional(),
  _avg: PropertyAvgAggregateInputObjectSchema.optional(),
  _sum: PropertySumAggregateInputObjectSchema.optional(),
})
