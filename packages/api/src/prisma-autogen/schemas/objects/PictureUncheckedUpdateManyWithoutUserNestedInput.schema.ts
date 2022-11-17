import { z } from 'zod'
import { PictureCreateWithoutUserInputObjectSchema } from './PictureCreateWithoutUserInput.schema'
import { PictureUncheckedCreateWithoutUserInputObjectSchema } from './PictureUncheckedCreateWithoutUserInput.schema'
import { PictureCreateOrConnectWithoutUserInputObjectSchema } from './PictureCreateOrConnectWithoutUserInput.schema'
import { PictureUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PictureUpsertWithWhereUniqueWithoutUserInput.schema'
import { PictureCreateManyUserInputEnvelopeObjectSchema } from './PictureCreateManyUserInputEnvelope.schema'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PictureUpdateWithWhereUniqueWithoutUserInput.schema'
import { PictureUpdateManyWithWhereWithoutUserInputObjectSchema } from './PictureUpdateManyWithWhereWithoutUserInput.schema'
import { PictureScalarWhereInputObjectSchema } from './PictureScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUncheckedUpdateManyWithoutUserNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => PictureCreateWithoutUserInputObjectSchema),
          z.lazy(() => PictureCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => PictureUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => PictureUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => PictureCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => PictureCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .union([
          z.lazy(() => PictureUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => PictureUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z.lazy(() => PictureCreateManyUserInputEnvelopeObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      set: z
        .union([
          z.lazy(() => PictureWhereUniqueInputObjectSchema),
          z.lazy(() => PictureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => PictureWhereUniqueInputObjectSchema),
          z.lazy(() => PictureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => PictureWhereUniqueInputObjectSchema),
          z.lazy(() => PictureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => PictureWhereUniqueInputObjectSchema),
          z.lazy(() => PictureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => PictureUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => PictureUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => PictureUpdateManyWithWhereWithoutUserInputObjectSchema),
          z.lazy(() => PictureUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => PictureScalarWhereInputObjectSchema),
          z.lazy(() => PictureScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const PictureUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
