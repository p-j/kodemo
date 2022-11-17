import { z } from 'zod'
import { PropertyWhereInputObjectSchema } from './objects/PropertyWhereInput.schema'

export const PropertyDeleteManySchema = z.object({ where: PropertyWhereInputObjectSchema.optional() })
