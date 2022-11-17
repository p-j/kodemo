import { z } from 'zod'
import { ListingSelectObjectSchema } from './objects/ListingSelect.schema'
import { ListingIncludeObjectSchema } from './objects/ListingInclude.schema'
import { ListingWhereUniqueInputObjectSchema } from './objects/ListingWhereUniqueInput.schema'
import { ListingCreateInputObjectSchema } from './objects/ListingCreateInput.schema'
import { ListingUpdateInputObjectSchema } from './objects/ListingUpdateInput.schema'

export const ListingUpsertSchema = z.object({
  select: ListingSelectObjectSchema.optional(),
  include: ListingIncludeObjectSchema.optional(),
  where: ListingWhereUniqueInputObjectSchema,
  create: ListingCreateInputObjectSchema,
  update: ListingUpdateInputObjectSchema,
})
