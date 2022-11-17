import { z } from 'zod'
import { PictureSelectObjectSchema } from './objects/PictureSelect.schema'
import { PictureIncludeObjectSchema } from './objects/PictureInclude.schema'
import { PictureCreateInputObjectSchema } from './objects/PictureCreateInput.schema'

export const PictureCreateOneSchema = z.object({
  select: PictureSelectObjectSchema.optional(),
  include: PictureIncludeObjectSchema.optional(),
  data: PictureCreateInputObjectSchema,
})
