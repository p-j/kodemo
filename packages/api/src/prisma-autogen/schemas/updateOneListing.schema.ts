import { z } from 'zod'
import { ListingSelectObjectSchema } from './objects/ListingSelect.schema'
import { ListingIncludeObjectSchema } from './objects/ListingInclude.schema'
import { ListingUpdateInputObjectSchema } from './objects/ListingUpdateInput.schema'
import { ListingWhereUniqueInputObjectSchema } from './objects/ListingWhereUniqueInput.schema'

export const ListingUpdateOneSchema = z.object({
  select: ListingSelectObjectSchema.optional(),
  include: ListingIncludeObjectSchema.optional(),
  data: ListingUpdateInputObjectSchema,
  where: ListingWhereUniqueInputObjectSchema,
})
