import { z } from 'zod'
import { ListingSelectObjectSchema } from './objects/ListingSelect.schema'
import { ListingIncludeObjectSchema } from './objects/ListingInclude.schema'
import { ListingCreateInputObjectSchema } from './objects/ListingCreateInput.schema'

export const ListingCreateOneSchema = z.object({
  select: ListingSelectObjectSchema.optional(),
  include: ListingIncludeObjectSchema.optional(),
  data: ListingCreateInputObjectSchema,
})
