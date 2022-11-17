import { z } from 'zod'
import { PropertyWhereInputObjectSchema } from './objects/PropertyWhereInput.schema'
import { PropertyOrderByWithAggregationInputObjectSchema } from './objects/PropertyOrderByWithAggregationInput.schema'
import { PropertyScalarWhereWithAggregatesInputObjectSchema } from './objects/PropertyScalarWhereWithAggregatesInput.schema'
import { PropertyScalarFieldEnumSchema } from './enums/PropertyScalarFieldEnum.schema'

export const PropertyGroupBySchema = z.object({
  where: PropertyWhereInputObjectSchema.optional(),
  orderBy: PropertyOrderByWithAggregationInputObjectSchema,
  having: PropertyScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PropertyScalarFieldEnumSchema),
})
