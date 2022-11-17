import { z } from 'zod'
import { PropertyUpdateManyMutationInputObjectSchema } from './objects/PropertyUpdateManyMutationInput.schema'
import { PropertyWhereInputObjectSchema } from './objects/PropertyWhereInput.schema'

export const PropertyUpdateManySchema = z.object({
  data: PropertyUpdateManyMutationInputObjectSchema,
  where: PropertyWhereInputObjectSchema.optional(),
})
