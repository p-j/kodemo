import { z } from 'zod'
import { AmenityWhereInputObjectSchema } from './objects/AmenityWhereInput.schema'

export const AmenityDeleteManySchema = z.object({ where: AmenityWhereInputObjectSchema.optional() })
