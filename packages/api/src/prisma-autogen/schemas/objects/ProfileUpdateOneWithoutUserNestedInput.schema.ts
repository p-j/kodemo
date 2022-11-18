import { z } from 'zod'
import { ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema'
import { ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema'
import { ProfileCreateOrConnectWithoutUserInputObjectSchema } from './ProfileCreateOrConnectWithoutUserInput.schema'
import { ProfileUpsertWithoutUserInputObjectSchema } from './ProfileUpsertWithoutUserInput.schema'
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'
import { ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema'
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileUpdateOneWithoutUserNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutUserInputObjectSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      upsert: z.lazy(() => ProfileUpsertWithoutUserInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      delete: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema),
          z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export const ProfileUpdateOneWithoutUserNestedInputObjectSchema = Schema
