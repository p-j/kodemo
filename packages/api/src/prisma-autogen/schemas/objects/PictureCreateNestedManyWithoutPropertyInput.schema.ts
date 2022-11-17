import { z } from 'zod'
import { PictureCreateWithoutPropertyInputObjectSchema } from './PictureCreateWithoutPropertyInput.schema'
import { PictureUncheckedCreateWithoutPropertyInputObjectSchema } from './PictureUncheckedCreateWithoutPropertyInput.schema'
import { PictureCreateOrConnectWithoutPropertyInputObjectSchema } from './PictureCreateOrConnectWithoutPropertyInput.schema'
import { PictureCreateManyPropertyInputEnvelopeObjectSchema } from './PictureCreateManyPropertyInputEnvelope.schema'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateNestedManyWithoutPropertyInput> = z.union([
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
      createMany: z.lazy(() => PictureCreateManyPropertyInputEnvelopeObjectSchema).optional(),
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

export const PictureCreateNestedManyWithoutPropertyInputObjectSchema = Schema
