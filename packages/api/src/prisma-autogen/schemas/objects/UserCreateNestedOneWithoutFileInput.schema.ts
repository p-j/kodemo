import { z } from 'zod'
import { UserCreateWithoutFileInputObjectSchema } from './UserCreateWithoutFileInput.schema'
import { UserUncheckedCreateWithoutFileInputObjectSchema } from './UserUncheckedCreateWithoutFileInput.schema'
import { UserCreateOrConnectWithoutFileInputObjectSchema } from './UserCreateOrConnectWithoutFileInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFileInput> = z.union([
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export const UserCreateNestedOneWithoutFileInputObjectSchema = Schema
