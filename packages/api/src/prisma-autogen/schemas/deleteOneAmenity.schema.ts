import { z } from 'zod'
import { AmenitySelectObjectSchema } from './objects/AmenitySelect.schema'
import { AmenityIncludeObjectSchema } from './objects/AmenityInclude.schema'
import { AmenityWhereUniqueInputObjectSchema } from './objects/AmenityWhereUniqueInput.schema'

export const AmenityDeleteOneSchema = z.object({
  select: AmenitySelectObjectSchema.optional(),
  include: AmenityIncludeObjectSchema.optional(),
  where: AmenityWhereUniqueInputObjectSchema,
})
