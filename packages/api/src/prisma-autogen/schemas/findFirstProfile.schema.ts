import { z } from 'zod'
import { ProfileSelectObjectSchema } from './objects/ProfileSelect.schema'
import { ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema'
import { ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema'
import { ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema'
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema'
import { ProfileScalarFieldEnumSchema } from './enums/ProfileScalarFieldEnum.schema'

export const ProfileFindFirstSchema = z.object({
  select: ProfileSelectObjectSchema.optional(),
  include: ProfileIncludeObjectSchema.optional(),
  where: ProfileWhereInputObjectSchema.optional(),
  orderBy: z
    .union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: ProfileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProfileScalarFieldEnumSchema).optional(),
})
