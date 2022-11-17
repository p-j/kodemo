import { z } from 'zod'
import { AmenitySelectObjectSchema } from './objects/AmenitySelect.schema'
import { AmenityIncludeObjectSchema } from './objects/AmenityInclude.schema'
import { AmenityCreateInputObjectSchema } from './objects/AmenityCreateInput.schema'

export const AmenityCreateOneSchema = z.object({
  select: AmenitySelectObjectSchema.optional(),
  include: AmenityIncludeObjectSchema.optional(),
  data: AmenityCreateInputObjectSchema,
})
