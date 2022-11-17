import { z } from 'zod'
import { AmenitySelectObjectSchema } from './objects/AmenitySelect.schema'
import { AmenityIncludeObjectSchema } from './objects/AmenityInclude.schema'
import { AmenityUpdateInputObjectSchema } from './objects/AmenityUpdateInput.schema'
import { AmenityWhereUniqueInputObjectSchema } from './objects/AmenityWhereUniqueInput.schema'

export const AmenityUpdateOneSchema = z.object({
  select: AmenitySelectObjectSchema.optional(),
  include: AmenityIncludeObjectSchema.optional(),
  data: AmenityUpdateInputObjectSchema,
  where: AmenityWhereUniqueInputObjectSchema,
})
