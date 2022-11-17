import { z } from 'zod'
import { UserCreateWithoutPropertiesInputObjectSchema } from './UserCreateWithoutPropertiesInput.schema'
import { UserUncheckedCreateWithoutPropertiesInputObjectSchema } from './UserUncheckedCreateWithoutPropertiesInput.schema'
import { UserCreateOrConnectWithoutPropertiesInputObjectSchema } from './UserCreateOrConnectWithoutPropertiesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPropertiesInput> = z.union([
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export const UserCreateNestedOneWithoutPropertiesInputObjectSchema = Schema
