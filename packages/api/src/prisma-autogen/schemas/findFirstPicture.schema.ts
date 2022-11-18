import { z } from 'zod'
import { PictureSelectObjectSchema } from './objects/PictureSelect.schema'
import { PictureIncludeObjectSchema } from './objects/PictureInclude.schema'
import { PictureWhereInputObjectSchema } from './objects/PictureWhereInput.schema'
import { PictureOrderByWithRelationInputObjectSchema } from './objects/PictureOrderByWithRelationInput.schema'
import { PictureWhereUniqueInputObjectSchema } from './objects/PictureWhereUniqueInput.schema'
import { PictureScalarFieldEnumSchema } from './enums/PictureScalarFieldEnum.schema'

export const PictureFindFirstSchema = z.object({
  select: PictureSelectObjectSchema.optional(),
  include: PictureIncludeObjectSchema.optional(),
  where: PictureWhereInputObjectSchema.optional(),
  orderBy: z
    .union([PictureOrderByWithRelationInputObjectSchema, PictureOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: PictureWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PictureScalarFieldEnumSchema).optional(),
})
