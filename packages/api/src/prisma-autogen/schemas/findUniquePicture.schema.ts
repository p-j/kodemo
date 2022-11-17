import { z } from 'zod'
import { PictureSelectObjectSchema } from './objects/PictureSelect.schema'
import { PictureIncludeObjectSchema } from './objects/PictureInclude.schema'
import { PictureWhereUniqueInputObjectSchema } from './objects/PictureWhereUniqueInput.schema'

export const PictureFindUniqueSchema = z.object({
  select: PictureSelectObjectSchema.optional(),
  include: PictureIncludeObjectSchema.optional(),
  where: PictureWhereUniqueInputObjectSchema,
})
