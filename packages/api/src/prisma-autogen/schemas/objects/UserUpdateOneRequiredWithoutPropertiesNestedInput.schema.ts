import { z } from 'zod'
import { UserCreateWithoutPropertiesInputObjectSchema } from './UserCreateWithoutPropertiesInput.schema'
import { UserUncheckedCreateWithoutPropertiesInputObjectSchema } from './UserUncheckedCreateWithoutPropertiesInput.schema'
import { UserCreateOrConnectWithoutPropertiesInputObjectSchema } from './UserCreateOrConnectWithoutPropertiesInput.schema'
import { UserUpsertWithoutPropertiesInputObjectSchema } from './UserUpsertWithoutPropertiesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutPropertiesInputObjectSchema } from './UserUpdateWithoutPropertiesInput.schema'
import { UserUncheckedUpdateWithoutPropertiesInputObjectSchema } from './UserUncheckedUpdateWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPropertiesNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPropertiesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutPropertiesInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPropertiesInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      upsert: z.lazy(() => UserUpsertWithoutPropertiesInputObjectSchema).optional(),
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
          z.lazy(() => UserUpdateWithoutPropertiesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPropertiesInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export const UserUpdateOneRequiredWithoutPropertiesNestedInputObjectSchema = Schema
