import { z } from 'zod'
import { PropertySelectObjectSchema } from './objects/PropertySelect.schema'
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema'
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema'
import { PropertyCreateInputObjectSchema } from './objects/PropertyCreateInput.schema'
import { PropertyUpdateInputObjectSchema } from './objects/PropertyUpdateInput.schema'

export const PropertyUpsertSchema = z.object({
  select: PropertySelectObjectSchema.optional(),
  include: PropertyIncludeObjectSchema.optional(),
  where: PropertyWhereUniqueInputObjectSchema,
  create: PropertyCreateInputObjectSchema,
  update: PropertyUpdateInputObjectSchema,
})
