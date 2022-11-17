import { z } from 'zod'
import { PropertyCreateWithoutAmenitiesInputObjectSchema } from './PropertyCreateWithoutAmenitiesInput.schema'
import { PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema } from './PropertyUncheckedCreateWithoutAmenitiesInput.schema'
import { PropertyCreateOrConnectWithoutAmenitiesInputObjectSchema } from './PropertyCreateOrConnectWithoutAmenitiesInput.schema'
import { PropertyUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema } from './PropertyUpsertWithWhereUniqueWithoutAmenitiesInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema } from './PropertyUpdateWithWhereUniqueWithoutAmenitiesInput.schema'
import { PropertyUpdateManyWithWhereWithoutAmenitiesInputObjectSchema } from './PropertyUpdateManyWithWhereWithoutAmenitiesInput.schema'
import { PropertyScalarWhereInputObjectSchema } from './PropertyScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpdateManyWithoutAmenitiesNestedInput> = z.union([
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
      upsert: z
        .union([
          z.lazy(() => PropertyUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema),
          z.lazy(() => PropertyUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      set: z
        .union([
          z.lazy(() => PropertyWhereUniqueInputObjectSchema),
          z.lazy(() => PropertyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => PropertyWhereUniqueInputObjectSchema),
          z.lazy(() => PropertyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => PropertyWhereUniqueInputObjectSchema),
          z.lazy(() => PropertyWhereUniqueInputObjectSchema).array(),
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
  z
    .object({
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema),
          z.lazy(() => PropertyUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => PropertyUpdateManyWithWhereWithoutAmenitiesInputObjectSchema),
          z.lazy(() => PropertyUpdateManyWithWhereWithoutAmenitiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => PropertyScalarWhereInputObjectSchema),
          z.lazy(() => PropertyScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const PropertyUpdateManyWithoutAmenitiesNestedInputObjectSchema = Schema
