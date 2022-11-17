import { z } from 'zod'
import { PropertyUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema } from './PropertyUncheckedCreateNestedManyWithoutAmenitiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    properties: z.lazy(() => PropertyUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema).optional(),
  })
  .strict()

export const AmenityUncheckedCreateInputObjectSchema = Schema
