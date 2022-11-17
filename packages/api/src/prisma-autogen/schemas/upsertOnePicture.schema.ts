import { z } from 'zod'
import { PictureSelectObjectSchema } from './objects/PictureSelect.schema'
import { PictureIncludeObjectSchema } from './objects/PictureInclude.schema'
import { PictureWhereUniqueInputObjectSchema } from './objects/PictureWhereUniqueInput.schema'
import { PictureCreateInputObjectSchema } from './objects/PictureCreateInput.schema'
import { PictureUpdateInputObjectSchema } from './objects/PictureUpdateInput.schema'

export const PictureUpsertSchema = z.object({
  select: PictureSelectObjectSchema.optional(),
  include: PictureIncludeObjectSchema.optional(),
  where: PictureWhereUniqueInputObjectSchema,
  create: PictureCreateInputObjectSchema,
  update: PictureUpdateInputObjectSchema,
})
