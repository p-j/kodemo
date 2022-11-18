import { z } from 'zod'
import { PictureSelectObjectSchema } from './objects/PictureSelect.schema'
import { PictureIncludeObjectSchema } from './objects/PictureInclude.schema'
import { PictureWhereInputObjectSchema } from './objects/PictureWhereInput.schema'
import { PictureOrderByWithRelationInputObjectSchema } from './objects/PictureOrderByWithRelationInput.schema'
import { PictureWhereUniqueInputObjectSchema } from './objects/PictureWhereUniqueInput.schema'
import { PictureScalarFieldEnumSchema } from './enums/PictureScalarFieldEnum.schema'

export const PictureFindManySchema = z.object({
  select: z.lazy(() => PictureSelectObjectSchema.optional()),
  include: z.lazy(() => PictureIncludeObjectSchema.optional()),
  where: PictureWhereInputObjectSchema.optional(),
  orderBy: z
    .union([PictureOrderByWithRelationInputObjectSchema, PictureOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: PictureWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PictureScalarFieldEnumSchema).optional(),
})
