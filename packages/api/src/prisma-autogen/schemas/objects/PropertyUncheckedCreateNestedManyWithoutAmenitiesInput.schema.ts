import { z } from 'zod'
import { PropertyCreateWithoutAmenitiesInputObjectSchema } from './PropertyCreateWithoutAmenitiesInput.schema'
import { PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema } from './PropertyUncheckedCreateWithoutAmenitiesInput.schema'
import { PropertyCreateOrConnectWithoutAmenitiesInputObjectSchema } from './PropertyCreateOrConnectWithoutAmenitiesInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateNestedManyWithoutAmenitiesInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutAmenitiesInputObjectSchema),
          z.lazy(() => PropertyCreateWithoutAmenitiesInputObjectSchema).array(),
          z.lazy(() => PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema),
          z.lazy(() => PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => PropertyCreateOrConnectWithoutAmenitiesInputObjectSchema),
          z.lazy(() => PropertyCreateOrConnectWithoutAmenitiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => PropertyWhereUniqueInputObjectSchema),
          z.lazy(() => PropertyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const PropertyUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema = Schema
