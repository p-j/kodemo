import { z } from 'zod'
import { PropertyCreateWithoutUserInputObjectSchema } from './PropertyCreateWithoutUserInput.schema'
import { PropertyUncheckedCreateWithoutUserInputObjectSchema } from './PropertyUncheckedCreateWithoutUserInput.schema'
import { PropertyCreateOrConnectWithoutUserInputObjectSchema } from './PropertyCreateOrConnectWithoutUserInput.schema'
import { PropertyUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PropertyUpsertWithWhereUniqueWithoutUserInput.schema'
import { PropertyCreateManyUserInputEnvelopeObjectSchema } from './PropertyCreateManyUserInputEnvelope.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PropertyUpdateWithWhereUniqueWithoutUserInput.schema'
import { PropertyUpdateManyWithWhereWithoutUserInputObjectSchema } from './PropertyUpdateManyWithWhereWithoutUserInput.schema'
import { PropertyScalarWhereInputObjectSchema } from './PropertyScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutUserInputObjectSchema),
          z.lazy(() => PropertyCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => PropertyUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => PropertyUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => PropertyCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => PropertyCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .union([
          z.lazy(() => PropertyUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => PropertyUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z.lazy(() => PropertyCreateManyUserInputEnvelopeObjectSchema).optional(),
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
          z.lazy(() => PropertyUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => PropertyUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => PropertyUpdateManyWithWhereWithoutUserInputObjectSchema),
          z.lazy(() => PropertyUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
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

export const PropertyUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
