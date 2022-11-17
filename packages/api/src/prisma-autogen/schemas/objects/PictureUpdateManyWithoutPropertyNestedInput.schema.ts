import { z } from 'zod'
import { PictureCreateWithoutPropertyInputObjectSchema } from './PictureCreateWithoutPropertyInput.schema'
import { PictureUncheckedCreateWithoutPropertyInputObjectSchema } from './PictureUncheckedCreateWithoutPropertyInput.schema'
import { PictureCreateOrConnectWithoutPropertyInputObjectSchema } from './PictureCreateOrConnectWithoutPropertyInput.schema'
import { PictureUpsertWithWhereUniqueWithoutPropertyInputObjectSchema } from './PictureUpsertWithWhereUniqueWithoutPropertyInput.schema'
import { PictureCreateManyPropertyInputEnvelopeObjectSchema } from './PictureCreateManyPropertyInputEnvelope.schema'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureUpdateWithWhereUniqueWithoutPropertyInputObjectSchema } from './PictureUpdateWithWhereUniqueWithoutPropertyInput.schema'
import { PictureUpdateManyWithWhereWithoutPropertyInputObjectSchema } from './PictureUpdateManyWithWhereWithoutPropertyInput.schema'
import { PictureScalarWhereInputObjectSchema } from './PictureScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUpdateManyWithoutPropertyNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => PictureCreateWithoutPropertyInputObjectSchema),
          z.lazy(() => PictureCreateWithoutPropertyInputObjectSchema).array(),
          z.lazy(() => PictureUncheckedCreateWithoutPropertyInputObjectSchema),
          z.lazy(() => PictureUncheckedCreateWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => PictureCreateOrConnectWithoutPropertyInputObjectSchema),
          z.lazy(() => PictureCreateOrConnectWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .union([
          z.lazy(() => PictureUpsertWithWhereUniqueWithoutPropertyInputObjectSchema),
          z.lazy(() => PictureUpsertWithWhereUniqueWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z.lazy(() => PictureCreateManyPropertyInputEnvelopeObjectSchema).optional(),
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
          z.lazy(() => PictureUpdateWithWhereUniqueWithoutPropertyInputObjectSchema),
          z.lazy(() => PictureUpdateWithWhereUniqueWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => PictureUpdateManyWithWhereWithoutPropertyInputObjectSchema),
          z.lazy(() => PictureUpdateManyWithWhereWithoutPropertyInputObjectSchema).array(),
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

export const PictureUpdateManyWithoutPropertyNestedInputObjectSchema = Schema
