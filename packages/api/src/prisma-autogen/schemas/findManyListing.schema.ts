import { z } from 'zod'
import { ListingSelectObjectSchema } from './objects/ListingSelect.schema'
import { ListingIncludeObjectSchema } from './objects/ListingInclude.schema'
import { ListingWhereInputObjectSchema } from './objects/ListingWhereInput.schema'
import { ListingOrderByWithRelationInputObjectSchema } from './objects/ListingOrderByWithRelationInput.schema'
import { ListingWhereUniqueInputObjectSchema } from './objects/ListingWhereUniqueInput.schema'
import { ListingScalarFieldEnumSchema } from './enums/ListingScalarFieldEnum.schema'

export const ListingFindManySchema = z.object({
  select: z.lazy(() => ListingSelectObjectSchema.optional()),
  include: z.lazy(() => ListingIncludeObjectSchema.optional()),
  where: ListingWhereInputObjectSchema.optional(),
  orderBy: ListingOrderByWithRelationInputObjectSchema.optional(),
  cursor: ListingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ListingScalarFieldEnumSchema).optional(),
})
