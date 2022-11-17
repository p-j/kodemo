import { z } from 'zod'
import { AmenityCreateWithoutPropertiesInputObjectSchema } from './AmenityCreateWithoutPropertiesInput.schema'
import { AmenityUncheckedCreateWithoutPropertiesInputObjectSchema } from './AmenityUncheckedCreateWithoutPropertiesInput.schema'
import { AmenityCreateOrConnectWithoutPropertiesInputObjectSchema } from './AmenityCreateOrConnectWithoutPropertiesInput.schema'
import { AmenityWhereUniqueInputObjectSchema } from './AmenityWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityCreateNestedManyWithoutPropertiesInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => AmenityCreateWithoutPropertiesInputObjectSchema),
          z.lazy(() => AmenityCreateWithoutPropertiesInputObjectSchema).array(),
          z.lazy(() => AmenityUncheckedCreateWithoutPropertiesInputObjectSchema),
          z.lazy(() => AmenityUncheckedCreateWithoutPropertiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => AmenityCreateOrConnectWithoutPropertiesInputObjectSchema),
          z.lazy(() => AmenityCreateOrConnectWithoutPropertiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => AmenityWhereUniqueInputObjectSchema),
          z.lazy(() => AmenityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const AmenityCreateNestedManyWithoutPropertiesInputObjectSchema = Schema
