import { z } from 'zod'
import { ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema'
import { ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema'
import { ProfileCreateOrConnectWithoutUserInputObjectSchema } from './ProfileCreateOrConnectWithoutUserInput.schema'
import { ProfileCreateManyUserInputEnvelopeObjectSchema } from './ProfileCreateManyUserInputEnvelope.schema'
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput> = z.union([
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
      createMany: z.lazy(() => ProfileCreateManyUserInputEnvelopeObjectSchema).optional(),
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
])

export const ProfileUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema
