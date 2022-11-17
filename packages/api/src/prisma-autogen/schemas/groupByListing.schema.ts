import { z } from 'zod'
import { ListingWhereInputObjectSchema } from './objects/ListingWhereInput.schema'
import { ListingOrderByWithAggregationInputObjectSchema } from './objects/ListingOrderByWithAggregationInput.schema'
import { ListingScalarWhereWithAggregatesInputObjectSchema } from './objects/ListingScalarWhereWithAggregatesInput.schema'
import { ListingScalarFieldEnumSchema } from './enums/ListingScalarFieldEnum.schema'

export const ListingGroupBySchema = z.object({
  where: ListingWhereInputObjectSchema.optional(),
  orderBy: ListingOrderByWithAggregationInputObjectSchema,
  having: ListingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ListingScalarFieldEnumSchema),
})
