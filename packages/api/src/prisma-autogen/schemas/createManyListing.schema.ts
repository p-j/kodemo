import { z } from 'zod'
import { ListingCreateManyInputObjectSchema } from './objects/ListingCreateManyInput.schema'

export const ListingCreateManySchema = z.object({ data: ListingCreateManyInputObjectSchema })
