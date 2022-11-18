import { z } from 'zod'
import { ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema'
import { ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema'
import { ProfileCreateOrConnectWithoutUserInputObjectSchema } from './ProfileCreateOrConnectWithoutUserInput.schema'
import { ProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProfileUpsertWithWhereUniqueWithoutUserInput.schema'
import { ProfileCreateManyUserInputEnvelopeObjectSchema } from './ProfileCreateManyUserInputEnvelope.schema'
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'
import { ProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProfileUpdateWithWhereUniqueWithoutUserInput.schema'
import { ProfileUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProfileUpdateManyWithWhereWithoutUserInput.schema'
import { ProfileScalarWhereInputObjectSchema } from './ProfileScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileUncheckedUpdateManyWithoutUserNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutUserInputObjectSchema),
          z.lazy(() => ProfileCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => ProfileCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => ProfileCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .union([
          z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z.lazy(() => ProfileCreateManyUserInputEnvelopeObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      set: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputObjectSchema),
          z.lazy(() => ProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputObjectSchema),
          z.lazy(() => ProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputObjectSchema),
          z.lazy(() => ProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputObjectSchema),
          z.lazy(() => ProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => ProfileUpdateManyWithWhereWithoutUserInputObjectSchema),
          z.lazy(() => ProfileUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => ProfileScalarWhereInputObjectSchema),
          z.lazy(() => ProfileScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const ProfileUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
