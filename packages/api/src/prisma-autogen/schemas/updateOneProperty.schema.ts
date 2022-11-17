import { z } from 'zod'
import { PropertySelectObjectSchema } from './objects/PropertySelect.schema'
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema'
import { PropertyUpdateInputObjectSchema } from './objects/PropertyUpdateInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema'

export const PropertyUpdateOneSchema = z.object({
  select: PropertySelectObjectSchema.optional(),
  include: PropertyIncludeObjectSchema.optional(),
  data: PropertyUpdateInputObjectSchema,
  where: PropertyWhereUniqueInputObjectSchema,
})
