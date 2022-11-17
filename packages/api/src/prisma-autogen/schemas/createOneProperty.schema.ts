import { z } from 'zod'
import { PropertySelectObjectSchema } from './objects/PropertySelect.schema'
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema'
import { PropertyCreateInputObjectSchema } from './objects/PropertyCreateInput.schema'

export const PropertyCreateOneSchema = z.object({
  select: PropertySelectObjectSchema.optional(),
  include: PropertyIncludeObjectSchema.optional(),
  data: PropertyCreateInputObjectSchema,
})
