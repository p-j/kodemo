import { z } from 'zod'
import { PictureSelectObjectSchema } from './objects/PictureSelect.schema'
import { PictureIncludeObjectSchema } from './objects/PictureInclude.schema'
import { PictureUpdateInputObjectSchema } from './objects/PictureUpdateInput.schema'
import { PictureWhereUniqueInputObjectSchema } from './objects/PictureWhereUniqueInput.schema'

export const PictureUpdateOneSchema = z.object({
  select: PictureSelectObjectSchema.optional(),
  include: PictureIncludeObjectSchema.optional(),
  data: PictureUpdateInputObjectSchema,
  where: PictureWhereUniqueInputObjectSchema,
})
