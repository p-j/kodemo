import { z } from 'zod'
import { AmenityCreateManyInputObjectSchema } from './objects/AmenityCreateManyInput.schema'

export const AmenityCreateManySchema = z.object({ data: AmenityCreateManyInputObjectSchema })
