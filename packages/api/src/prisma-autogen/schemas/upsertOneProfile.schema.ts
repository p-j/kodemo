import { z } from 'zod'
import { ProfileSelectObjectSchema } from './objects/ProfileSelect.schema'
import { ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema'
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema'
import { ProfileCreateInputObjectSchema } from './objects/ProfileCreateInput.schema'
import { ProfileUpdateInputObjectSchema } from './objects/ProfileUpdateInput.schema'

export const ProfileUpsertSchema = z.object({
  select: ProfileSelectObjectSchema.optional(),
  include: ProfileIncludeObjectSchema.optional(),
  where: ProfileWhereUniqueInputObjectSchema,
  create: ProfileCreateInputObjectSchema,
  update: ProfileUpdateInputObjectSchema,
})
