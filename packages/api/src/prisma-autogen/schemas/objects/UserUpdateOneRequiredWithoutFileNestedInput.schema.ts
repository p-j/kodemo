import { z } from 'zod'
import { UserCreateWithoutFileInputObjectSchema } from './UserCreateWithoutFileInput.schema'
import { UserUncheckedCreateWithoutFileInputObjectSchema } from './UserUncheckedCreateWithoutFileInput.schema'
import { UserCreateOrConnectWithoutFileInputObjectSchema } from './UserCreateOrConnectWithoutFileInput.schema'
import { UserUpsertWithoutFileInputObjectSchema } from './UserUpsertWithoutFileInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutFileInputObjectSchema } from './UserUpdateWithoutFileInput.schema'
import { UserUncheckedUpdateWithoutFileInputObjectSchema } from './UserUncheckedUpdateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFileNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFileInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutFileInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFileInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      upsert: z.lazy(() => UserUpsertWithoutFileInputObjectSchema).optional(),
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
          z.lazy(() => UserUpdateWithoutFileInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutFileInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export const UserUpdateOneRequiredWithoutFileNestedInputObjectSchema = Schema
