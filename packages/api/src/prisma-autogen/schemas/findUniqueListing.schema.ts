import { z } from 'zod'
import { ListingSelectObjectSchema } from './objects/ListingSelect.schema'
import { ListingIncludeObjectSchema } from './objects/ListingInclude.schema'
import { ListingWhereUniqueInputObjectSchema } from './objects/ListingWhereUniqueInput.schema'

export const ListingFindUniqueSchema = z.object({
  select: ListingSelectObjectSchema.optional(),
  include: ListingIncludeObjectSchema.optional(),
  where: ListingWhereUniqueInputObjectSchema,
})
