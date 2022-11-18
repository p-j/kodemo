import { z } from 'zod'
import { ProfileSelectObjectSchema } from './objects/ProfileSelect.schema'
import { ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema'
import { ProfileUpdateInputObjectSchema } from './objects/ProfileUpdateInput.schema'
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema'

export const ProfileUpdateOneSchema = z.object({
  select: ProfileSelectObjectSchema.optional(),
  include: ProfileIncludeObjectSchema.optional(),
  data: ProfileUpdateInputObjectSchema,
  where: ProfileWhereUniqueInputObjectSchema,
})
