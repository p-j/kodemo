import { z } from 'zod'
import { PropertySelectObjectSchema } from './objects/PropertySelect.schema'
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema'
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema'

export const PropertyFindUniqueSchema = z.object({
  select: PropertySelectObjectSchema.optional(),
  include: PropertyIncludeObjectSchema.optional(),
  where: PropertyWhereUniqueInputObjectSchema,
})
