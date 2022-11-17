import { z } from 'zod'
import { PictureCreateWithoutUserInputObjectSchema } from './PictureCreateWithoutUserInput.schema'
import { PictureUncheckedCreateWithoutUserInputObjectSchema } from './PictureUncheckedCreateWithoutUserInput.schema'
import { PictureCreateOrConnectWithoutUserInputObjectSchema } from './PictureCreateOrConnectWithoutUserInput.schema'
import { PictureCreateManyUserInputEnvelopeObjectSchema } from './PictureCreateManyUserInputEnvelope.schema'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateNestedManyWithoutUserInput> = z.union([
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
      createMany: z.lazy(() => PictureCreateManyUserInputEnvelopeObjectSchema).optional(),
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
])

export const PictureCreateNestedManyWithoutUserInputObjectSchema = Schema
