import { z } from 'zod'
import { UserCreateWithoutFilesInputObjectSchema } from './UserCreateWithoutFilesInput.schema'
import { UserUncheckedCreateWithoutFilesInputObjectSchema } from './UserUncheckedCreateWithoutFilesInput.schema'
import { UserCreateOrConnectWithoutFilesInputObjectSchema } from './UserCreateOrConnectWithoutFilesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFilesInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFilesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutFilesInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFilesInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export const UserCreateNestedOneWithoutFilesInputObjectSchema = Schema
