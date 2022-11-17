import { z } from 'zod'
import { PropertyCreateNestedManyWithoutAmenitiesInputObjectSchema } from './PropertyCreateNestedManyWithoutAmenitiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    properties: z.lazy(() => PropertyCreateNestedManyWithoutAmenitiesInputObjectSchema).optional(),
  })
  .strict()

export const AmenityCreateInputObjectSchema = Schema
