import { z } from 'zod'
import { ListingUpdateManyMutationInputObjectSchema } from './objects/ListingUpdateManyMutationInput.schema'
import { ListingWhereInputObjectSchema } from './objects/ListingWhereInput.schema'

export const ListingUpdateManySchema = z.object({
  data: ListingUpdateManyMutationInputObjectSchema,
  where: ListingWhereInputObjectSchema.optional(),
})
