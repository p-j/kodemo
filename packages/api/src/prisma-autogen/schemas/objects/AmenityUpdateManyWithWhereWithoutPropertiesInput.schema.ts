import { z } from 'zod'
import { AmenityScalarWhereInputObjectSchema } from './AmenityScalarWhereInput.schema'
import { AmenityUpdateManyMutationInputObjectSchema } from './AmenityUpdateManyMutationInput.schema'
import { AmenityUncheckedUpdateManyWithoutAmenitiesInputObjectSchema } from './AmenityUncheckedUpdateManyWithoutAmenitiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityUpdateManyWithWhereWithoutPropertiesInput> = z
  .object({
    where: z.lazy(() => AmenityScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AmenityUpdateManyMutationInputObjectSchema),
      z.lazy(() => AmenityUncheckedUpdateManyWithoutAmenitiesInputObjectSchema),
    ]),
  })
  .strict()

export const AmenityUpdateManyWithWhereWithoutPropertiesInputObjectSchema = Schema
