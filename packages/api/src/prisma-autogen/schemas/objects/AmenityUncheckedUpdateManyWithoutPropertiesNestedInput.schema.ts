import { z } from 'zod'
import { AmenityCreateWithoutPropertiesInputObjectSchema } from './AmenityCreateWithoutPropertiesInput.schema'
import { AmenityUncheckedCreateWithoutPropertiesInputObjectSchema } from './AmenityUncheckedCreateWithoutPropertiesInput.schema'
import { AmenityCreateOrConnectWithoutPropertiesInputObjectSchema } from './AmenityCreateOrConnectWithoutPropertiesInput.schema'
import { AmenityUpsertWithWhereUniqueWithoutPropertiesInputObjectSchema } from './AmenityUpsertWithWhereUniqueWithoutPropertiesInput.schema'
import { AmenityWhereUniqueInputObjectSchema } from './AmenityWhereUniqueInput.schema'
import { AmenityUpdateWithWhereUniqueWithoutPropertiesInputObjectSchema } from './AmenityUpdateWithWhereUniqueWithoutPropertiesInput.schema'
import { AmenityUpdateManyWithWhereWithoutPropertiesInputObjectSchema } from './AmenityUpdateManyWithWhereWithoutPropertiesInput.schema'
import { AmenityScalarWhereInputObjectSchema } from './AmenityScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityUncheckedUpdateManyWithoutPropertiesNestedInput> = z.union([
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
      upsert: z
        .union([
          z.lazy(() => AmenityUpsertWithWhereUniqueWithoutPropertiesInputObjectSchema),
          z.lazy(() => AmenityUpsertWithWhereUniqueWithoutPropertiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      set: z
        .union([
          z.lazy(() => AmenityWhereUniqueInputObjectSchema),
          z.lazy(() => AmenityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => AmenityWhereUniqueInputObjectSchema),
          z.lazy(() => AmenityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => AmenityWhereUniqueInputObjectSchema),
          z.lazy(() => AmenityWhereUniqueInputObjectSchema).array(),
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
  z
    .object({
      update: z
        .union([
          z.lazy(() => AmenityUpdateWithWhereUniqueWithoutPropertiesInputObjectSchema),
          z.lazy(() => AmenityUpdateWithWhereUniqueWithoutPropertiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => AmenityUpdateManyWithWhereWithoutPropertiesInputObjectSchema),
          z.lazy(() => AmenityUpdateManyWithWhereWithoutPropertiesInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => AmenityScalarWhereInputObjectSchema),
          z.lazy(() => AmenityScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const AmenityUncheckedUpdateManyWithoutPropertiesNestedInputObjectSchema = Schema
