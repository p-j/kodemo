import { z } from 'zod'
import { AmenitySelectObjectSchema } from './objects/AmenitySelect.schema'
import { AmenityIncludeObjectSchema } from './objects/AmenityInclude.schema'
import { AmenityWhereUniqueInputObjectSchema } from './objects/AmenityWhereUniqueInput.schema'
import { AmenityCreateInputObjectSchema } from './objects/AmenityCreateInput.schema'
import { AmenityUpdateInputObjectSchema } from './objects/AmenityUpdateInput.schema'

export const AmenityUpsertSchema = z.object({
  select: AmenitySelectObjectSchema.optional(),
  include: AmenityIncludeObjectSchema.optional(),
  where: AmenityWhereUniqueInputObjectSchema,
  create: AmenityCreateInputObjectSchema,
  update: AmenityUpdateInputObjectSchema,
})
