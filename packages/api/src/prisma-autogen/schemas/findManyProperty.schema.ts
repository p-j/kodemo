import { z } from 'zod'
import { PropertySelectObjectSchema } from './objects/PropertySelect.schema'
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema'
import { PropertyWhereInputObjectSchema } from './objects/PropertyWhereInput.schema'
import { PropertyOrderByWithRelationInputObjectSchema } from './objects/PropertyOrderByWithRelationInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema'
import { PropertyScalarFieldEnumSchema } from './enums/PropertyScalarFieldEnum.schema'

export const PropertyFindManySchema = z.object({
  select: z.lazy(() => PropertySelectObjectSchema.optional()),
  include: z.lazy(() => PropertyIncludeObjectSchema.optional()),
  where: PropertyWhereInputObjectSchema.optional(),
  orderBy: PropertyOrderByWithRelationInputObjectSchema.optional(),
  cursor: PropertyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PropertyScalarFieldEnumSchema).optional(),
})
