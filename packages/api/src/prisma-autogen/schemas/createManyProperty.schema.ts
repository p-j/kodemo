import { z } from 'zod'
import { PropertyCreateManyInputObjectSchema } from './objects/PropertyCreateManyInput.schema'

export const PropertyCreateManySchema = z.object({ data: PropertyCreateManyInputObjectSchema })
