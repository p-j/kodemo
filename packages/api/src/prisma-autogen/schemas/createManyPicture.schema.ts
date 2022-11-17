import { z } from 'zod'
import { PictureCreateManyInputObjectSchema } from './objects/PictureCreateManyInput.schema'

export const PictureCreateManySchema = z.object({ data: PictureCreateManyInputObjectSchema })
