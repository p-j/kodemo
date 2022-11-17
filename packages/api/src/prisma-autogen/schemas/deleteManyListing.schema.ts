import { z } from 'zod'
import { ListingWhereInputObjectSchema } from './objects/ListingWhereInput.schema'

export const ListingDeleteManySchema = z.object({ where: ListingWhereInputObjectSchema.optional() })
