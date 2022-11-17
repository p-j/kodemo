import { z } from 'zod'
import { AmenityUpdateManyMutationInputObjectSchema } from './objects/AmenityUpdateManyMutationInput.schema'
import { AmenityWhereInputObjectSchema } from './objects/AmenityWhereInput.schema'

export const AmenityUpdateManySchema = z.object({
  data: AmenityUpdateManyMutationInputObjectSchema,
  where: AmenityWhereInputObjectSchema.optional(),
})
