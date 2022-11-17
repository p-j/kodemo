import { z } from 'zod'
import { UserCreateWithoutPicturesInputObjectSchema } from './UserCreateWithoutPicturesInput.schema'
import { UserUncheckedCreateWithoutPicturesInputObjectSchema } from './UserUncheckedCreateWithoutPicturesInput.schema'
import { UserCreateOrConnectWithoutPicturesInputObjectSchema } from './UserCreateOrConnectWithoutPicturesInput.schema'
import { UserUpsertWithoutPicturesInputObjectSchema } from './UserUpsertWithoutPicturesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutPicturesInputObjectSchema } from './UserUpdateWithoutPicturesInput.schema'
import { UserUncheckedUpdateWithoutPicturesInputObjectSchema } from './UserUncheckedUpdateWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPicturesNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPicturesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutPicturesInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPicturesInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      upsert: z.lazy(() => UserUpsertWithoutPicturesInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPicturesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPicturesInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export const UserUpdateOneRequiredWithoutPicturesNestedInputObjectSchema = Schema
