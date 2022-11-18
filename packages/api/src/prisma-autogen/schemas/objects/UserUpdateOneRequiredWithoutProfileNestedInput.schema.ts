import { z } from 'zod'
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema'
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema'
import { UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema'
import { UserUpsertWithoutProfileInputObjectSchema } from './UserUpsertWithoutProfileInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema'
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProfileNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutProfileInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      upsert: z.lazy(() => UserUpsertWithoutProfileInputObjectSchema).optional(),
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
          z.lazy(() => UserUpdateWithoutProfileInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export const UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema = Schema
