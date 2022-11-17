import { z } from 'zod'
import { PictureUpdateManyMutationInputObjectSchema } from './objects/PictureUpdateManyMutationInput.schema'
import { PictureWhereInputObjectSchema } from './objects/PictureWhereInput.schema'

export const PictureUpdateManySchema = z.object({
  data: PictureUpdateManyMutationInputObjectSchema,
  where: PictureWhereInputObjectSchema.optional(),
})
