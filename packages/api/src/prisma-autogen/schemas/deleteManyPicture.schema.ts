import { z } from 'zod'
import { PictureWhereInputObjectSchema } from './objects/PictureWhereInput.schema'

export const PictureDeleteManySchema = z.object({ where: PictureWhereInputObjectSchema.optional() })
