import { z } from 'zod'
import { UserCreateWithoutPicturesInputObjectSchema } from './UserCreateWithoutPicturesInput.schema'
import { UserUncheckedCreateWithoutPicturesInputObjectSchema } from './UserUncheckedCreateWithoutPicturesInput.schema'
import { UserCreateOrConnectWithoutPicturesInputObjectSchema } from './UserCreateOrConnectWithoutPicturesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPicturesInput> = z.union([
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export const UserCreateNestedOneWithoutPicturesInputObjectSchema = Schema
